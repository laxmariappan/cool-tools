import Link from "next/link";
export default function Tool({ item }) {
  const tags = item.properties.Tags.multi_select;
  return (
    <>
      <div className="min-h-0 h-32  ">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          <Link
            href={item.properties.Link.rich_text[0]?.plain_text}
            passHref={true}
          >
            <a className="text-purple-600 hover:text-gray-700">
              {item.properties.Name.title[0]?.plain_text}
            </a>
          </Link>
        </h2>
        <p className=" text-sm font-normal text-gray-500 ">
          {item.properties.Description.rich_text[0]?.plain_text}
        </p>
      </div>
      <div className="flex flex-wrap">
        {tags.length > 0 &&
          tags.map(function (tag, index) {
            return (
              <Link
                href={{
                  pathname: "/[tag]",
                  query: { tag: `${tag.name}` },
                }}
                key={tag.name}
              >
                <a
                  className="rounded p-1 m-1 text-xs "
                  style={{
                    backgroundColor: tag.color,
                    backgroundImage:
                      "linear-gradient(180deg,#ffffffe6,#ffffffe6)",
                  }}
                >
                  <span className="">{tag?.name}</span>
                </a>
              </Link>
            );
          })}
      </div>
    </>
  );
}
