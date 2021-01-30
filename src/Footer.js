import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElement";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Get to Know Us</FooterLinkTitle>
                <FooterLink
                  href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer"
                  target="_blank"
                >
                  About Us
                </FooterLink>
                <FooterLink href="https://amazon.jobs/en/" target="_blank">
                  Careers
                </FooterLink>
                <FooterLink
                  href="https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer"
                  target="_blank"
                >
                  Press Releases
                </FooterLink>
                <FooterLink
                  href="https://www.amazon.in/b?ie=UTF8&node=8872558031&ref_=footer_cares"
                  target="_blank"
                >
                  Amazon Cares
                </FooterLink>
                <FooterLink
                  href="https://www.amazon.in/Online-Charity/b?ie=UTF8&node=4594605031&ref_=footer_smile"
                  target="_blank"
                >
                  Gift a Smile
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Make Money with Us</FooterLinkTitle>
                <FooterLink
                  href="https://www.amazon.in/b/?_encoding=UTF8&ld=AZINSOANavDesktopFooter&node=2838698031&ref_=nav_footer_sell"
                  target="_blank"
                >
                  Sell on Amazon
                </FooterLink>
                <FooterLink
                  href="https://www.amazon.in/b/?node=16192220031&ref_=map_1_b2b_GW_FT"
                  target="_blank"
                >
                  Sell under Amazon Accelerator
                </FooterLink>
                <FooterLink
                  href="https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter"
                  target="_blank"
                >
                  Fulfilment by Amazon
                </FooterLink>
                <FooterLink
                  href="https://advertising.amazon.com/en-gb"
                  target="_blank"
                >
                  Advertise Your Products
                </FooterLink>
                <FooterLink
                  href="https://www.amazonpay.in/merchant"
                  target="_blank"
                >
                  Amazon Pay on Merchants
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>GET HELP</FooterLinkTitle>
                <FooterLink
                  href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid"
                  target="_blank"
                >
                  COVID-19 and Amazon
                </FooterLink>
                <FooterLink
                  href="https://www.amazon.in/gp/css/homepage.html?ie=UTF8&ref_=footer_ya"
                  target="_blank"
                >
                  Your Account
                </FooterLink>
                <FooterLink
                  href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=201083470&ref_=footer_swc"
                  target="_blank"
                >
                  100% Purchase Protection
                </FooterLink>
                <FooterLink
                  href="https://www.amazon.in/b?ie=UTF8&node=6967393031&ref_=footer_mobapp"
                  target="_blank"
                >
                  Amazon App Download
                </FooterLink>

                <FooterLink
                  href="https://www.amazon.in/aa?_encoding=UTF8&ref_=footer_assistant_download_copy"
                  target="_blank"
                >
                  Amazon Assistant Download
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>RESOURCES</FooterLinkTitle>
                <FooterLink href="https://www.abebooks.com/" target="_blank">
                  Books & collectibles
                </FooterLink>
                <FooterLink href="https://www.shopbop.com/" target="_blank">
                  Designer Fashion Brands
                </FooterLink>
                <FooterLink href="https://www.dpreview.com/" target="_blank">
                  Digital Photography
                </FooterLink>
                <FooterLink
                  href="https://www.amazon.in/b?node=21102587031&ref=cs_help_bi_1&ref=footer_aingw"
                  target="_blank"
                >
                  Everything For Your Business
                </FooterLink>
                <FooterLink
                  href="https://www.amazon.in/music/prime?ref=footer_apm"
                  target="_blank"
                >
                  70 million songs, ad-free
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Amazon
              </SocialLogo>
              <WebsiteRights>
                Amazon © {new Date().getFullYear()} | Privacy Policy | Terms of
                Use | Cookies Settings
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.facebook.com/AmazonIN"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>

                <SocialIconLink
                  href="https://www.instagram.com/amazondotin/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://twitter.com/AmazonIN"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
}

export default Footer;
