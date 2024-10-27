import HeroVideoDialog from "./magicui/Video";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/2TqRJQR4AgQ?si=An2pEZojWiYPGnOo"
        thumbnailSrc="G:\lask-page\my-app\src\assets\thumbnail.webp"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/2TqRJQR4AgQ?si=An2pEZojWiYPGnOo"
        thumbnailSrc="G:\lask-page\my-app\src\assets\thumbnail.webp"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
