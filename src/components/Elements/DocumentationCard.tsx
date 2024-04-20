import Link from "next/link";
import React from "react";
import { ArrowRightIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const DocumentationCard: React.FC<CardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="h-full border-2 border-gray-200 rounded-lg">
      <div className="p-6">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-500">{description}</p>
        <div className="flex mt-10 text-green-500 ">
          <Link href={link} className="flex">
            Read more
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DocumentationCard;
