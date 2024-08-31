import {defineField, defineType} from 'sanity'

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
    },
    prepare(selection) {
      const {tag, date} = selection
      return {
        ...selection,
        subtitle: `${tag ? `Tag: ${tag}` : ''} ${date ? `| Date: ${date}` : ''}`,
      }
    },
  },
})
