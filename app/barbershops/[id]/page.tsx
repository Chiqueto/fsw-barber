import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
//É um server component, então eu posso acessar meu banco de dados

interface BarbersshopPageProps {
  params: { id: string }
}

const BarbershopPage = async ({ params }: BarbersshopPageProps) => {
  //Chamar meu banco de dados
  const barbershop = await db.barbershop.findUnique({
    where: { id: params.id },
  })
  return (
    <div>
      {/* Imagem  */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          className="object-cover"
        />
        <Button
          size={"icon"}
          variant={"secondary"}
          className="absolute left-4 top-4"
          asChild
        >
          <Link href={"/"}>
            <ChevronLeftIcon />
          </Link>
        </Button>
        <Button
          size={"icon"}
          variant={"secondary"}
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>
      <h1>{barbershop?.name}</h1>
    </div>
  )
}

export default BarbershopPage
