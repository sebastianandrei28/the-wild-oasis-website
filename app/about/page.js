import Image from "next/image";
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.jpg";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          <p>
            Where nature&#39;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&#39;s not just about the luxury
            cabins. It&#39;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our 8 luxury cabins provide a cozy base, but the real freedom and
            peace you&#39;ll find in the surrounding mountains. Wander through
            lush forests, breathe in the fresh air, and watch the stars twinkle
            above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by nature&#39;s
            splendor. It&#39;s a place to slow down, relax, and feel the joy of
            being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={about1}
          placeholder="blur"
          alt="Family sitting around a fire pit in front of cabin"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          className="object-cover "
          fill
          placeholder="blur"
          quality={80}
          src={about2}
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&#39;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&#39;re not just a
            guest; you&#39;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all">
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
