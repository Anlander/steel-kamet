import Form from "@/app/components/Form/Form";
import { storyblokEditable } from "@storyblok/react";

export const FormBlock = ({ blok, settings }: any) => {
  return (
    <div {...storyblokEditable}>
      <Form title={blok.title} settings={settings} />
    </div>
  );
};
