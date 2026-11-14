"use client";

import { useState, type FormEvent } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

type Field = "name" | "email" | "subject" | "message";
type FormCopy = Record<Field, string> & {
  submit: string;
  note: string;
  draft: string;
  fallback: string;
  error: string;
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  subjectRequired: string;
  messageRequired: string;
};

export default function ContactForm({
  translations: t,
}: {
  translations: FormCopy;
}) {
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<"idle" | "draft" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<Field, string>> = {};
    if (!values.name.trim()) nextErrors.name = t.nameRequired;
    if (!values.email.trim()) nextErrors.email = t.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      nextErrors.email = t.emailInvalid;
    if (!values.subject.trim()) nextErrors.subject = t.subjectRequired;
    if (!values.message.trim()) nextErrors.message = t.messageRequired;
    setErrors(nextErrors);
    setStatus("idle");
    const firstError = (Object.keys(nextErrors) as Field[])[0];
    if (firstError) {
      document.getElementById(firstError)?.focus();
      return;
    }
    const body = `${t.name}: ${values.name}\n${t.email}: ${values.email}\n\n${values.message}`;
    try {
      window.location.href = `mailto:hi@scelus.io?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
      setStatus("draft");
    } catch {
      setStatus("error");
    }
  }

  function field(name: Field, multiline = false) {
    const props = {
      id: name,
      name,
      value: values[name],
      required: true,
      "aria-invalid": !!errors[name],
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
      onChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
        setValues((previous) => ({ ...previous, [name]: event.target.value }));
        setErrors((previous) => ({ ...previous, [name]: undefined }));
        setStatus("idle");
      },
    };
    return (
      <div className="form-field">
        <label htmlFor={name}>{t[name]}</label>
        {multiline ? (
          <textarea {...props} rows={6} />
        ) : (
          <input
            {...props}
            type={name === "email" ? "email" : "text"}
            autoComplete={
              name === "name" || name === "email" ? name : undefined
            }
          />
        )}
        {errors[name] && (
          <p className="form-error" id={`${name}-error`}>
            {errors[name]}
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      action="mailto:hi@scelus.io"
      method="post"
      encType="text/plain"
      onSubmit={handleSubmit}
      noValidate
    >
      <p className="form-note">
        {t.note} <a href="mailto:hi@scelus.io">hi@scelus.io</a>
      </p>
      <div className="form-grid">
        {field("name")}
        {field("email")}
      </div>
      {field("subject")}
      {field("message", true)}
      {status !== "idle" && (
        <div
          className={status === "error" ? "form-error" : "form-status"}
          role="status"
        >
          {status === "draft" ? t.draft : t.error} {t.fallback}{" "}
          <a href="mailto:hi@scelus.io">hi@scelus.io</a>
        </div>
      )}
      <button className="button button-primary" type="submit">
        {t.submit}
        <HiArrowUpRight aria-hidden="true" />
      </button>
    </form>
  );
}
