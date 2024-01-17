import Image from "next/image";
import Link from "next/link";

const Content = ({ ogImages }) => {
  return (
    <div className="p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-2">
        {ogImages.map((ogImage) => (
          <li key={ogImage.id}>
            <Link
              href={ogImage.path}
              target="_blank"
            >
              <Image
                src={ogImage.path}
                alt={ogImage.name}
                width={500}
                height={150}
                href={ogImage.path}
                className="border-solid border-gray-400 border-2 rounded-2xl mb-3"
              />
            </Link>

            <Link
              href={ogImage.image}
              target="_blank"
            >
              <h3 className="pl-4 text-xl leading-5">{ogImage.name}</h3>
            </Link>
            {/* <div className="flex mt-2 flex-wrap">
              {ogImage.categories.map((category, index) => (
                <p
                  key={index}
                  className={`ml-3 p-1 rounded-2xl text-black dark:text-white border-2 text-[14px] mb-2`}
                >
                  #{category} comment for now 
                </p>
              ))}
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Content;
