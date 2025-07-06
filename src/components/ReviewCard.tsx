import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
  name: "JJ",
  username: "@jj",
  body: "Blendify makes swapping and staking wETH and BLND feel effortless. This is the future of DeFi!",
  img: "https://avatar.vercel.sh/jack",
},
{
  name: "Jojo",
  username: "@jojo",
  body: "Supplying USDC and borrowing wBTC has never been smoother. I’m seriously impressed with Blendify.",
  img: "https://avatar.vercel.sh/jill",
},
{
  name: "Fabian",
  username: "@fabian",
  body: "Blendify is a game-changer. I’m staking XLM like a pro and loving the experience.",
  img: "https://avatar.vercel.sh/john",
},
{
  name: "Prince",
  username: "@prince",
  body: "From swaps to loans, Blendify makes DeFi on Stellar feel like magic. I’m all in.",
  img: "https://avatar.vercel.sh/jane",
},
{
  name: "Madeleine",
  username: "@madeleine",
  body: "I never imagined DeFi could be this seamless. Blendify is a brilliant hub for all things Stellar.",
  img: "https://avatar.vercel.sh/jenny",
},
{
  name: "Kevin",
  username: "@kevin",
  body: "The Blendify experience is unmatched. Borrowing and staking tokens like wETH and USDC is a breeze!",
  img: "https://avatar.vercel.sh/james",
},

];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-black">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-black">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeSlide() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
