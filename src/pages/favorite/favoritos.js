import { Advertisement, Footer, FooterApp, PageNone } from "@/components";
import { BasicLayout } from "@/layouts";
import React from "react";

export default function FavoritePage() {
  return (
    <>
      <BasicLayout>
        <Advertisement />
      </BasicLayout>


      <PageNone title={"Pagina en construcción"}/>
      <FooterApp />
      <Footer />
    </>
  );
}
