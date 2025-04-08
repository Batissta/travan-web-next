"use client";
import React from "react";
import SearchTripForm from "@/components/form/SearchTripForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, Search, TrendingUp } from "lucide-react";
import { FlipWords } from "@/components/ui/FlipWords";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
  return (
    <>
      <section className="bg-blue-900/10 min-h-auto px-14 font-(font-family:--font-poppins) grid grid-cols-1 lg:grid-cols-2 overflow-x-hidden gap-12 items-center justify-center pt-[4rem] pb-[6rem]">
        <div className="flex flex-col mx-auto">
          <div className="flex flex-col items-start">
            <h1 className="text-5xl font-extrabold tracking-tighter mb-4 text-(--color-one) w-fit">
              Vá a qualquer lugar com o App do Travan
            </h1>
            <p className="text-[1rem] font-semibold mb-8 text-(--color-two) w-fit">
              Seu próximo destino te espera. Explore, descubra e viva novas
              experiências!
            </p>
          </div>
          <div className="w-[80%] mx-auto lg:mx-0">
            <SearchTripForm />
          </div>
        </div>
        <div className="flex flex-col mx-auto">
          <div
            about="Carrossel de lugares para procurar caronas"
            className="h-full"
          >
            <Carousel className="bg-transparent flex h-full font-(family-name:--font-poppins)">
              <CarouselContent className="h-full flex">
                <CarouselItem className="h-full grid relative w-full group overflow-hidden">
                  <Image
                    src={"/facisa.jpeg"}
                    width={240}
                    height={240}
                    sizes="50vw"
                    className="object-cover object-center h-[100%] w-full"
                    alt="Imagem da Unifacisa"
                  />
                  <div className="duration-200 bg-zinc-900/90 absolute flex flex-col w-full top-0 bottom-0 mx-4 p-6">
                    <h2 className="text-zinc-50 mt-2 text-2xl font-extrabold">
                      UNIFACISA - Centro Universitário
                    </h2>
                    <p className="text-zinc-400 text-sm">
                      Encontre caronas para a UNIFACISA!
                    </p>
                    <Button className="self-start mt-4 cursor-pointer border border-zinc-700 bg-transparent">
                      <Search />
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="h-full grid relative w-full group overflow-hidden">
                  <Image
                    src={"/uepb.webp"}
                    width={240}
                    height={240}
                    sizes="50vw"
                    className="object-cover object-center h-[100%] w-full"
                    alt="Imagem da Unifacisa"
                  />
                  <div className="duration-200 bg-zinc-900/90 absolute flex flex-col w-full top-0 bottom-0 mx-4 p-6">
                    <h2 className="text-zinc-50 mt-2 text-2xl font-extrabold">
                      UEPB - Universidade Estadual da Paraíba
                    </h2>
                    <p className="text-zinc-400">
                      Encontre caronas para a UEPB!
                    </p>
                    <Button className="self-start mt-4 cursor-pointer border border-zinc-700 bg-transparent">
                      <Search />
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="h-full grid relative w-full group overflow-hidden">
                  <Image
                    src={"/ufcg.jpg"}
                    width={240}
                    height={240}
                    sizes="50vw"
                    className="object-cover object-center h-[100%] w-full"
                    alt="Imagem da Unifacisa"
                  />
                  <div className="duration-200 bg-zinc-900/90 absolute flex flex-col w-full top-0 bottom-0 mx-4 p-6">
                    <h2 className="text-zinc-50 mt-2 text-2xl font-extrabold">
                      UFCG - Universidade Federal de Campina Grande
                    </h2>
                    <p className="text-zinc-400">
                      Encontre caronas para a UFCG!
                    </p>
                    <Button className="self-start mt-4 cursor-pointer border border-zinc-700 bg-transparent">
                      <Search />
                    </Button>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-[-16px] bg-(--color-one) cursor-pointer hover:bg-transparent hover:text-zinc-200 disabled:text-zinc-950/50 disabled:opacity-50" />
              <CarouselNext className="right-[-16px] bg-(--color-one) cursor-pointer hover:bg-transparent hover:text-zinc-200 disabled:text-zinc-950/50 disabled:opacity-50" />
            </Carousel>
          </div>
        </div>
      </section>
      <section className="bg-(--color-two) px-14 py-10">
        <div className="flex flex-col gap-12">
          <div>
            <h1 className="font-(family-name:--font-poppins) text-5xl font-extrabold tracking-tighter mb-4 text-zinc-950 w-fit">
              <FlipWords
                className="m-0"
                words={[
                  "Tem um carro?",
                  "Quer dividir o preço do combustível?",
                  "Cadastre-se como um motorista!",
                ]}
              />
            </h1>
            <p className="pl-2 text-zinc-700 mt-2">
              Nós administramos o consumo de combustível e os pagamentos por
              você!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
            <Card className="bg-slate-900 border-slate-800 text-white">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <p className="text-sky-400 font-medium mb-2">Time Efficiency</p>
                <div className="flex items-center justify-center bg-sky-600 rounded-full w-16 h-16 mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-white">40%</h3>
                <p className="text-slate-300">
                  Faster workflow completion with our automated tools
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 text-white">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <p className="text-sky-400 font-medium mb-2">Cost Reduction</p>
                <div className="flex items-center justify-center bg-sky-600 rounded-full w-16 h-16 mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-white">30%</h3>
                <p className="text-slate-300">
                  Lower operational costs compared to traditional solutions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 text-white">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <p className="text-sky-400 font-medium mb-2">
                  Productivity Boost
                </p>
                <div className="flex items-center justify-center bg-sky-600 rounded-full w-16 h-16 mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-white">50%</h3>
                <p className="text-slate-300">
                  Increased team productivity with streamlined processes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
