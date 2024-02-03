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

  /**
   * read_time field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.read_time
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  read_time: prismic.KeyTextField;
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
  | FeaturedBlogsSlice
  | SitePreviewSlice
  | DevelopmentProcessSlice
  | FeaturedProjectsSlice
  | LandingSlice;

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

  /**
   * project_image field in *project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_image: prismic.ImageField<never>;
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
 * Primary content in *DevelopmentProcess → Primary*
 */
export interface DevelopmentProcessSliceDefaultPrimary {
  /**
   * title field in *DevelopmentProcess → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: development_process.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *DevelopmentProcess → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: development_process.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for DevelopmentProcess Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DevelopmentProcessSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DevelopmentProcessSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *DevelopmentProcess*
 */
type DevelopmentProcessSliceVariation = DevelopmentProcessSliceDefault;

/**
 * DevelopmentProcess Shared Slice
 *
 * - **API ID**: `development_process`
 * - **Description**: DevelopmentProcess
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DevelopmentProcessSlice = prismic.SharedSlice<
  "development_process",
  DevelopmentProcessSliceVariation
>;

/**
 * Primary content in *FeaturedBlogs → Primary*
 */
export interface FeaturedBlogsSliceDefaultPrimary {
  /**
   * title field in *FeaturedBlogs → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_blogs.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *FeaturedBlogs → Items*
 */
export interface FeaturedBlogsSliceDefaultItem {
  /**
   * blog_title field in *FeaturedBlogs → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_blogs.items[].blog_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  blog_title: prismic.KeyTextField;

  /**
   * blog_link field in *FeaturedBlogs → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_blogs.items[].blog_link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  blog_link: prismic.KeyTextField;
}

/**
 * Default variation for FeaturedBlogs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedBlogsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedBlogsSliceDefaultPrimary>,
  Simplify<FeaturedBlogsSliceDefaultItem>
>;

/**
 * Slice variation for *FeaturedBlogs*
 */
type FeaturedBlogsSliceVariation = FeaturedBlogsSliceDefault;

/**
 * FeaturedBlogs Shared Slice
 *
 * - **API ID**: `featured_blogs`
 * - **Description**: FeaturedBlogs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedBlogsSlice = prismic.SharedSlice<
  "featured_blogs",
  FeaturedBlogsSliceVariation
>;

/**
 * Default variation for FeaturedProjects Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProjectsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *FeaturedProjects*
 */
type FeaturedProjectsSliceVariation = FeaturedProjectsSliceDefault;

/**
 * FeaturedProjects Shared Slice
 *
 * - **API ID**: `featured_projects`
 * - **Description**: FeaturedProjects
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProjectsSlice = prismic.SharedSlice<
  "featured_projects",
  FeaturedProjectsSliceVariation
>;

/**
 * Primary content in *Landing → Primary*
 */
export interface LandingSliceDefaultPrimary {
  /**
   * title field in *Landing → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * hero_image field in *Landing → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.primary.hero_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>;

  /**
   * description field in *Landing → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for Landing Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LandingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LandingSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Landing*
 */
type LandingSliceVariation = LandingSliceDefault;

/**
 * Landing Shared Slice
 *
 * - **API ID**: `landing`
 * - **Description**: Landing
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LandingSlice = prismic.SharedSlice<
  "landing",
  LandingSliceVariation
>;

/**
 * Primary content in *SitePreview → Primary*
 */
export interface SitePreviewSliceDefaultPrimary {
  /**
   * title field in *SitePreview → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: site_preview.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * laptop field in *SitePreview → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: site_preview.primary.laptop
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  laptop: prismic.ImageField<never>;
}

/**
 * Default variation for SitePreview Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SitePreviewSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SitePreviewSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SitePreview*
 */
type SitePreviewSliceVariation = SitePreviewSliceDefault;

/**
 * SitePreview Shared Slice
 *
 * - **API ID**: `site_preview`
 * - **Description**: SitePreview
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SitePreviewSlice = prismic.SharedSlice<
  "site_preview",
  SitePreviewSliceVariation
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
      DevelopmentProcessSlice,
      DevelopmentProcessSliceDefaultPrimary,
      DevelopmentProcessSliceVariation,
      DevelopmentProcessSliceDefault,
      FeaturedBlogsSlice,
      FeaturedBlogsSliceDefaultPrimary,
      FeaturedBlogsSliceDefaultItem,
      FeaturedBlogsSliceVariation,
      FeaturedBlogsSliceDefault,
      FeaturedProjectsSlice,
      FeaturedProjectsSliceVariation,
      FeaturedProjectsSliceDefault,
      LandingSlice,
      LandingSliceDefaultPrimary,
      LandingSliceVariation,
      LandingSliceDefault,
      SitePreviewSlice,
      SitePreviewSliceDefaultPrimary,
      SitePreviewSliceVariation,
      SitePreviewSliceDefault,
    };
  }
}
