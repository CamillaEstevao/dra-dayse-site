import React from 'react'

function SvgIcon({ size = 24, children, fill = 'none', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      fill={fill}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  )
}

export function ArrowRight(props) {
  return <SvgIcon {...props}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></SvgIcon>
}

export function CalendarDays(props) {
  return (
    <SvgIcon {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </SvgIcon>
  )
}

export function CheckCircle2(props) {
  return <SvgIcon {...props}><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" /></SvgIcon>
}

export function ChevronDown(props) {
  return <SvgIcon {...props}><path d="m6 9 6 6 6-6" /></SvgIcon>
}

export function Clock3(props) {
  return <SvgIcon {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></SvgIcon>
}

export function Menu(props) {
  return <SvgIcon {...props}><path d="M4 7h16M4 12h16M4 17h16" /></SvgIcon>
}

export function MessageCircle(props) {
  return <SvgIcon {...props}><path d="M21 11.5a8.4 8.4 0 0 1-9 8.3 9.5 9.5 0 0 1-4-.9L3 21l1.6-4.4A8.4 8.4 0 1 1 21 11.5Z" /></SvgIcon>
}

export function Play({ fill = 'none', ...props }) {
  return <SvgIcon fill={fill} {...props}><path d="m9 7 8 5-8 5Z" /></SvgIcon>
}

export function ShieldCheck(props) {
  return <SvgIcon {...props}><path d="M12 3 5 6v5c0 4.7 2.9 8 7 10 4.1-2 7-5.3 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></SvgIcon>
}

export function Sparkles(props) {
  return <SvgIcon {...props}><path d="m12 3 1.4 3.6L17 8l-3.6 1.4L12 13l-1.4-3.6L7 8l3.6-1.4L12 3Z" /><path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" /></SvgIcon>
}

export function X(props) {
  return <SvgIcon {...props}><path d="M6 6l12 12M18 6 6 18" /></SvgIcon>
}

export function InstagramIcon({ size = 24, ...props }) {
  return (
    <SvgIcon size={size} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </SvgIcon>
  )
}

export function FacebookIcon({ size = 24, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      {...props}
    >
      <path d="M13.7 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5H17V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2H8v3.1h2.5v8h3.2Z" />
    </svg>
  )
}
