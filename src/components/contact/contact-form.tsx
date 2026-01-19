"use client";

/**
 * Contact form component with client-side validation and POST to
 * `${NEXT_PUBLIC_API_URL}/contact`.
 *
 * Includes honeypot and timing-based abuse prevention and provides accessible
 * success/error feedback via alerts and toasts.
 */

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useId, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { buildContactEndpoint, safeParseUrl } from "@/lib/api/contact";
import { type ContactFormData, contactFormSchema } from "@/lib/schemas/contact";

interface APIErrorResponse {
  error: string;
  code?: string;
  details?: Array<{ message: string; path: Array<string | number> }>;
}

/**
 * Contact form UI with validation and submission logic.
 *
 * @returns A fully accessible contact form.
 */
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const { toast } = useToast();
  const idPrefix = useId();
  const fieldIds = useMemo(
    () => ({
      name: `${idPrefix}-name`,
      email: `${idPrefix}-email`,
      message: `${idPrefix}-message`,
      honeypot: `${idPrefix}-hp`,
    }),
    [idPrefix],
  );
  // Track when form was loaded for timing-based abuse prevention
  const formLoadTime = useRef(Date.now());
  const [honeypot, setHoneypot] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      // Netlify Forms submission
      // Needs application/x-www-form-urlencoded
      const encode = (data: Record<string, string>) => {
        return Object.keys(data)
          .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
      };

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...data,
          honeypot, // Include honeypot in submission
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message via Netlify Forms");
      }

      setFormStatus("success");
      toast({
        title: "Message sent!",
        description: "Thanks for your message. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      setFormStatus("error");
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {formStatus === "success" && (
        <Alert
          role="status"
          aria-live="polite"
          className="border-emerald-200/70 bg-emerald-50/90 text-emerald-950 shadow-xs dark:border-emerald-900/60 dark:bg-emerald-950/35 dark:text-emerald-50"
        >
          <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
          <AlertTitle>Message Sent Successfully!</AlertTitle>
          <AlertDescription className="text-emerald-800/90 dark:text-emerald-200/90">
            Thank you for your message. I&apos;ll get back to you as soon as possible.
          </AlertDescription>
        </Alert>
      )}

      {formStatus === "error" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Failed to Send Message</AlertTitle>
          <AlertDescription>
            Please try again. If the problem persists, reach out via the contact form later or send
            a message through{" "}
            <a
              href="https://www.linkedin.com/in/bjornmelin/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xs underline hover:text-red-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              LinkedIn
            </a>
            .
          </AlertDescription>
        </Alert>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        noValidate
        aria-busy={isSubmitting}
        data-netlify="true"
        name="contact"
        method="POST"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="honeypot" />

        <div className="space-y-2">
          <Label htmlFor={fieldIds.name}>Name</Label>
          <Input
            id={fieldIds.name}
            type="text"
            placeholder="Your name…"
            {...register("name")}
            autoComplete="name"
            aria-describedby={errors.name ? `${fieldIds.name}-error` : undefined}
            aria-invalid={!!errors.name}
            disabled={isSubmitting}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p id={`${fieldIds.name}-error`} className="text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor={fieldIds.email}>Email</Label>
          <Input
            id={fieldIds.email}
            type="email"
            placeholder="your.email@example.com…"
            {...register("email")}
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
            aria-describedby={errors.email ? `${fieldIds.email}-error` : undefined}
            aria-invalid={!!errors.email}
            disabled={isSubmitting}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p id={`${fieldIds.email}-error`} className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor={fieldIds.message}>Message</Label>
          <Textarea
            id={fieldIds.message}
            placeholder="Your message…"
            {...register("message")}
            autoComplete="off"
            aria-describedby={errors.message ? `${fieldIds.message}-error` : undefined}
            aria-invalid={!!errors.message}
            disabled={isSubmitting}
            rows={5}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && (
            <p id={`${fieldIds.message}-error`} className="text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}
