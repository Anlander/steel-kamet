"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FaCookieBite } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function CookieConsent({
  variant = "default",
  demo = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const accept = () => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setTimeout(() => {
      setHide(true);
    }, 700);
    onAcceptCallback();
  };

  const decline = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(true);
    }, 700);
    onDeclineCallback();
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes("cookieConsent=true")) {
        if (!demo) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      }
    } catch (e) {
      // console.log("Error: ", e);
    }
  }, []);

  return variant == "default" ? (
    <div
      className={cn(
        "fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden"
      )}
    >
      <div className="dark:bg-card bg-background rounded-md m-3 border border-border shadow-lg">
        <div className="grid gap-2">
          <div className="border-b border-border h-14 flex items-center justify-between p-4">
            <h1 className="text-lg font-medium">Cookies</h1>
            <FaCookieBite className="h-[1.2rem] w-[1.2rem]" />
          </div>
          <div className="p-4">
            <p className="text-sm font-normal text-start">
              Vi använder cookies för att säkerställa att du får den bästa
              upplevelsen på vår webbplats. För mer information om hur vi
              använder cookies, se vår cookiepolicy.
              <br />
              <br />
              <span className="text-xs">
                Genom att klicka
                <span className="font-medium opacity-80"> acceptera </span>,
                samtycker du till vår användning av cookies.
              </span>
              <br />
            </p>
          </div>
          <div className="flex gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
            <Button onClick={accept} className="w-full">
              Acceptera
            </Button>
            <Button onClick={decline} className="w-full" variant="secondary">
              Avvisa
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    variant == "small" && (
      <div
        className={cn(
          "fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
          !isOpen
            ? "transition-[opacity,transform] translate-y-8 opacity-0"
            : "transition-[opacity,transform] translate-y-0 opacity-100",
          hide && "hidden"
        )}
      >
        <div className="m-3 dark:bg-card bg-background border border-border rounded-lg">
          <div className="flex items-center justify-between p-3">
            <h1 className="text-lg font-medium">Vi använder cookies</h1>
            <FaCookieBite className="h-[1.2rem] w-[1.2rem]" />{" "}
          </div>
          <div className="p-3 -mt-2">
            <p className="text-sm text-left text-muted-foreground">
              Vi använder cookies för att säkerställa att du får den bästa
              upplevelsen på vår webbplats. För mer information om hur vi
              använder cookies, se vår cookiepolicy.
            </p>
          </div>
          <div className="p-3 flex items-center gap-2 mt-2 border-t">
            <Button onClick={accept} className="w-full h-9 rounded-full">
              acceptera
            </Button>
            <Button
              onClick={decline}
              className="w-full h-9 rounded-full"
              variant="outline"
            >
              avvisa
            </Button>
          </div>
        </div>
      </div>
    )
  );
}
