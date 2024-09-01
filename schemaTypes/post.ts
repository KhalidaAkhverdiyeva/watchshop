import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'text',
    }),
    defineField({
      name: 'highlighted',
      title: 'Highlighted',
      type: 'text', 
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM',
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      tag: 'tag',
      media: 'image',
      date: 'date',
      highlighted: 'highlighted',
    },
    prepare(selection) {
      const { title, tag, date, highlighted } = selection;
      return {
        title,
        subtitle: `${tag ? `Tag: ${tag}` : ''} ${date ? `| Date: ${date}` : ''} ${highlighted ? `| Highlighted: ${highlighted}` : ''}`,
        media: selection.media,
      };
    },
  },
});
