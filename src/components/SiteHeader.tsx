"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 861px)");
    const onChange = () => setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <Link className="logo" href="/" aria-label="Ironline Cycles home">
          <span className="logo-mark" aria-hidden="true" />
          Ironline <span className="logo-accent">Cycles</span>
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          id="nav-toggle"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span className="nav-toggle-bar" />
        </button>
        <nav
          className={`site-nav${open ? " is-open" : ""}`}
          id="site-nav"
          aria-label="Primary"
        >
          <ul>
            <li>
              <a href="#services" onClick={close}>
                Services
              </a>
            </li>
            <li>
              <a href="#products" onClick={close}>
                Products
              </a>
            </li>
            <li>
              <a href="#packages" onClick={close}>
                Tune-ups
              </a>
            </li>
            <li>
              <a href="#why-us" onClick={close}>
                Why us
              </a>
            </li>
            <li>
              <a href="#location" onClick={close}>
                Visit
              </a>
            </li>
            <li>
              <a href="#faq" onClick={close}>
                FAQ
              </a>
            </li>
            <li>
              <a className="nav-cta" href="#contact" onClick={close}>
                Book / Call
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
