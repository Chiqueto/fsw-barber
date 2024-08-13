import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";
const Header = () => {
  return (
    <Card>
      <CardHeader className="p-5 flex flex-row items-center justify-between">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardHeader>
    </Card>
  );
};

export default Header;
