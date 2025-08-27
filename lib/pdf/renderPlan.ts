import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import type { DocumentProps } from "@react-pdf/renderer";
import { PlanPdf, Answers, Section } from "./Plan";

export async function renderPlanToBuffer(args: { logoPath: string; answers: Answers; sections: Section[] }) {
  const element = React.createElement(PlanPdf, args) as unknown as React.ReactElement<DocumentProps>;
  return renderToBuffer(element);
}


