import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardHeader } from "./ui/card"
import Image from "next/image"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./sidebar-sheet"
const Header = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardHeader>
    </Card>
  )
}

export default Header
