export default {
  name: "post",
  type: "document",
  title: "post 1",
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "meta",
      title: "meta",
    },
  ],
  fields: [
    {
      name: "meta_title",
      type: "string",
      title: "meta title",
      validation: (Rule) => Rule.required(),
      group: "meta",
    },
    {
      name: "title",
      type: "string",
      title: "title",
      validation: (Rule) => Rule.required(),
      group: "content",
    },
    {
      name: "date",
      type: "date",
      title: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "image",
      validation: (Rule) => Rule.required(),
      group: "content",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "captions",
          options: {
            isHighLighted: true,
          },
        },
        {
          name: "attribution",
          type: "string",
          title: "attribution",
        },
      ],
    },
    {
      title: "slug",
      name: "slug",
      type: "slug",
      group: "content",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "description",
      type: "text",
      title: "description",
      group: "content",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "bodyContent",
      type: "array",
      group: "content",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
  ],
};
