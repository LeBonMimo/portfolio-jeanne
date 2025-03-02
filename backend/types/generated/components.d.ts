import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAboutMeSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_me_sections';
  info: {
    description: '';
    displayName: 'About Me Section';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    paragraph3: Schema.Attribute.Text;
    paragraph4: Schema.Attribute.Text;
    paragraph5: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksContactSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_sections';
  info: {
    displayName: 'Contact Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    subHeading: Schema.Attribute.Text;
  };
}

export interface BlocksNewsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_news_sections';
  info: {
    displayName: 'News Section';
  };
  attributes: {
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksProjectsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_projects_sections';
  info: {
    description: '';
    displayName: 'Projects Section';
  };
  attributes: {
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.Text;
    footerLinks: Schema.Attribute.Component<'elements.link', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    description: '';
    displayName: 'Navbar';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    navItems: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-me-section': BlocksAboutMeSection;
      'blocks.contact-section': BlocksContactSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.news-section': BlocksNewsSection;
      'blocks.projects-section': BlocksProjectsSection;
      'elements.link': ElementsLink;
      'layout.footer': LayoutFooter;
      'layout.navbar': LayoutNavbar;
    }
  }
}
