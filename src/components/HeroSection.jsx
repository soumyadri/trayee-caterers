import React from "react";
import DarkModeCoverPhoto from "../assets/darkModeCover.png";
import CoverPhoto from "../assets/cover.png";
import HeroImage from "../assets/heroImage.png";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export const HeroSection = () => {
  return (
    <div>
      <Card className="py-4">
        <CardBody className="overflow-visible bg-slate-800 py-2">
          <Image width={"100%"} alt="NextUI hero Image" src={HeroImage} />
        </CardBody>
      </Card>

      <p className="text-slate-300 font-bold text-3xl">Key Attraction</p>

      <div className="flex justify-between gap-8 p-4">
        <Card className="py-4">
          <CardBody className="overflow-visible bg-slate-800 py-2">
            <Image width={"100%"} alt="NextUI hero Image" src={CoverPhoto} />
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardBody className="overflow-visible bg-slate-800 py-2">
            <Image
              width={"100%"}
              alt="NextUI hero Image"
              src={DarkModeCoverPhoto}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
