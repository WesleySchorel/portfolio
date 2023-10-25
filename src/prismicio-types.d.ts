// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for blog documents
 */
interface BlogDocumentData {
  /**
   * title field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;

type HomepageDocumentDataSlicesSlice =
  | BlogsPreviewSlice
  | ContactSlice
  | ProjectsPreviewSlice
  | AboutSlice
  | IntroductionSlice;

/**
 * Content for homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Content for project documents
 */
interface ProjectDocumentData {
  /**
   * title field in *project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

export type AllDocumentTypes =
  | BlogDocument
  | HomepageDocument
  | ProjectDocument;

/**
 * Primary content in *About → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * title field in *About → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: About
   * - **API ID Path**: about.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * text field in *About → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: I started making websites because I wanted to share my hobbies online...
   * - **API ID Path**: about.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

/**
 * Primary content in *BlogsPreview → Primary*
 */
export interface BlogsPreviewSliceDefaultPrimary {
  /**
   * title field in *BlogsPreview → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogs_preview.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * text field in *BlogsPreview → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogs_preview.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Primary content in *BlogsPreview → Items*
 */
export interface BlogsPreviewSliceDefaultItem {
  /**
   * blog_title field in *BlogsPreview → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogs_preview.items[].blog_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  blog_title: prismic.KeyTextField;

  /**
   * blog_link field in *BlogsPreview → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogs_preview.items[].blog_link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  blog_link: prismic.KeyTextField;
}

/**
 * Default variation for BlogsPreview Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogsPreviewSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogsPreviewSliceDefaultPrimary>,
  Simplify<BlogsPreviewSliceDefaultItem>
>;

/**
 * Slice variation for *BlogsPreview*
 */
type BlogsPreviewSliceVariation = BlogsPreviewSliceDefault;

/**
 * BlogsPreview Shared Slice
 *
 * - **API ID**: `blogs_preview`
 * - **Description**: BlogsPreview
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogsPreviewSlice = prismic.SharedSlice<
  "blogs_preview",
  BlogsPreviewSliceVariation
>;

/**
 * Primary content in *Contact → Primary*
 */
export interface ContactSliceDefaultPrimary {
  /**
   * title field in *Contact → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Get in touch
   * - **API ID Path**: contact.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * text field in *Contact → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: If you are interested in collaborating, please don't hesitate to reach out to me...
   * - **API ID Path**: contact.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * email field in *Contact → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;
}

/**
 * Default variation for Contact Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Contact*
 */
type ContactSliceVariation = ContactSliceDefault;

/**
 * Contact Shared Slice
 *
 * - **API ID**: `contact`
 * - **Description**: Contact
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSlice = prismic.SharedSlice<
  "contact",
  ContactSliceVariation
>;

/**
 * Primary content in *Introduction → Primary*
 */
export interface IntroductionSliceDefaultPrimary {
  /**
   * title field in *Introduction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for Introduction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroductionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IntroductionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Introduction*
 */
type IntroductionSliceVariation = IntroductionSliceDefault;

/**
 * Introduction Shared Slice
 *
 * - **API ID**: `introduction`
 * - **Description**: Introduction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroductionSlice = prismic.SharedSlice<
  "introduction",
  IntroductionSliceVariation
>;

/**
 * Primary content in *ProjectsPreview → Primary*
 */
export interface ProjectsPreviewSliceDefaultPrimary {
  /**
   * title field in *ProjectsPreview → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Projects
   * - **API ID Path**: projects_preview.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * text field in *ProjectsPreview → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: These are my recent projects...
   * - **API ID Path**: projects_preview.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * project_placeholder field in *ProjectsPreview → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_preview.primary.project_placeholder
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_placeholder: prismic.ImageField<never>;
}

/**
 * Primary content in *ProjectsPreview → Items*
 */
export interface ProjectsPreviewSliceDefaultItem {
  /**
   * project_number field in *ProjectsPreview → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_preview.items[].project_number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_number: prismic.KeyTextField;

  /**
   * project_link field in *ProjectsPreview → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_preview.items[].project_link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_link: prismic.KeyTextField;
}

/**
 * Default variation for ProjectsPreview Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsPreviewSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectsPreviewSliceDefaultPrimary>,
  Simplify<ProjectsPreviewSliceDefaultItem>
>;

/**
 * Slice variation for *ProjectsPreview*
 */
type ProjectsPreviewSliceVariation = ProjectsPreviewSliceDefault;

/**
 * ProjectsPreview Shared Slice
 *
 * - **API ID**: `projects_preview`
 * - **Description**: ProjectsPreview
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsPreviewSlice = prismic.SharedSlice<
  "projects_preview",
  ProjectsPreviewSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogDocument,
      BlogDocumentData,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      ProjectDocument,
      ProjectDocumentData,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimary,
      AboutSliceVariation,
      AboutSliceDefault,
      BlogsPreviewSlice,
      BlogsPreviewSliceDefaultPrimary,
      BlogsPreviewSliceDefaultItem,
      BlogsPreviewSliceVariation,
      BlogsPreviewSliceDefault,
      ContactSlice,
      ContactSliceDefaultPrimary,
      ContactSliceVariation,
      ContactSliceDefault,
      IntroductionSlice,
      IntroductionSliceDefaultPrimary,
      IntroductionSliceVariation,
      IntroductionSliceDefault,
      ProjectsPreviewSlice,
      ProjectsPreviewSliceDefaultPrimary,
      ProjectsPreviewSliceDefaultItem,
      ProjectsPreviewSliceVariation,
      ProjectsPreviewSliceDefault,
    };
  }
}
