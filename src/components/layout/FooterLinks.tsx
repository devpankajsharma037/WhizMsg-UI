import React from "react";

type footerMenuProps = {
  footerMenu: { name: string; href: string }[];
  heading: string;
};

export const FooterLinks = ({ footerMenu, heading }: footerMenuProps) => {
  return (
    <div>
      <h3 className="text-lg/3 font-semibold text-gray-900">{heading}</h3>
      <ul role="list" className="mt-6 space-y-4">
        {footerMenu.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="text-sm/6 text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
