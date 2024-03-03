<template>
  <div>
    <div
      class="header-background flex flex-col bg-gray-700 pt-[92px] text-white"
    >
      <div
        class="flex h-[calc(100dvh-92px)] flex-col items-center justify-center gap-6 px-4 pb-8"
      >
        <div class="flex flex-col items-center gap-4 text-center">
          <h1 class="font-chakra text-4xl font-light uppercase md:text-7xl">
            online shopping <br />
            <span class="font-bold text-alianza-500"> easy and safe </span>
          </h1>
          <p class="max-w-[48ch] text-base md:text-lg lg:text-lg">
            Alianza's mission is to guarantee its members that they will receive
            their purchases their online purchases.
          </p>
        </div>
        <div class="flex justify-center gap-3">
          <NuxtLink
            to="contacto"
            class="rounded bg-alianza-500 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-alianza-600"
            >Contact us</NuxtLink
          >
          <NuxtLink
            to="/services"
            class="rounded border border-white bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-alianza-500 hover:bg-alianza-500"
            >See more</NuxtLink
          >
        </div>
      </div>
    </div>
    <section class="bg-slate-50 px-6 py-24 text-gray-700 lg:px-16">
      <div
        class="flex w-full flex-col justify-between gap-8 text-gray-700 lg:flex-row"
      >
        <div class="lg:w-2/6">
          <div class="sticky top-28 flex flex-col gap-6">
            <p class="text-xs font-bold uppercase">About us</p>
            <div>
              <h2
                class="font-chakra text-4xl font-semibold uppercase text-gray-800 md:text-5xl lg:text-5xl"
              >
                Quality <br />at your reach
              </h2>
              <NuxtLink
                to="/about"
                class="group text-sm font-semibold text-black transition-colors duration-300 hover:text-orange-700"
                >See more<Icon
                  class="transition-transform duration-300 group-hover:translate-x-1"
                  name="octicon:chevron-right-16"
                  size="14px"
              /></NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-16 lg:w-2/3">
          <div class="flex flex-col gap-16 lg:flex-row">
            <p>
              Alianza Shopping Club is a global shopping service that helps your
              customers get products from any store in the world, even if they
              don't have a credit card or an overseas account or courier abroad.
              We make it easy and affordable for<span class="font-bold">
                Individuals and Businesses
              </span>
              to shop online, no matter where they are in the world.
            </p>
            <p>
              Acquisition of products, equipment and machinery from abroad, in
              companies such as
              <span class="font-bold"
                >Amazon, Ebay, Home Depot, Shein, Alibaba</span
              >
              and many more. Receiving these purchases with the security of a
              good shipping service and in the comfort of your cities. Find the
              product, equipment or machinery you need, with certified and
              guaranteed suppliers.
            </p>
          </div>
          <div class="hidden md:block lg:block">
            <ul
              class="flex gap-2 md:justify-between lg:flex-row lg:justify-between"
            >
              <li class="transition-all hover:scale-110">
                <!-- <img src="~/assets/img/logos/amazon.png" alt="Amazon Logo" /> -->
              </li>
              <li class="transition-all hover:scale-110">
                <!-- <img src="~/assets/img/logos/ebay.png" alt="Ebay Logo" /> -->
              </li>
              <li class="transition-all hover:scale-110">
                <!-- <img -->
                src="~/assets/img/logos/homedepot.png" alt="Home Depot Logo" />
              </li>
              <li class="transition-all hover:scale-110">
                <!-- <img src="~/assets/img/logos/alibaba.png" alt="Alibaba Logo" /> -->
              </li>
            </ul>
          </div>
          <!-- <img class="rounded-md" src="~/assets/img/zone.jpg" alt="" /> -->
        </div>
      </div>
      <hr class="my-12 border-gray-300 lg:my-24" />
      <div class="flex flex-col gap-8 lg:flex-row">
        <div class="lg:w-2/6">
          <div class="flex flex-col gap-6">
            <p class="text-xs font-bold uppercase">Services</p>
            <div>
              <h2
                class="font-chakra text-4xl font-semibold uppercase text-gray-800 md:text-5xl lg:text-5xl"
              >
                How does Alianza<br />
                work?
              </h2>
              <NuxtLink
                to="/services"
                class="group text-sm font-semibold text-black transition-colors duration-300 hover:text-orange-700"
                >See more<Icon
                  class="transition-transform duration-300 group-hover:translate-x-1"
                  name="octicon:chevron-right-16"
                  size="14px"
              /></NuxtLink>
            </div>
          </div>
        </div>
        <ul class="flex flex-col gap-8 lg:w-2/3">
          <li class="flex items-center gap-6">
            <div class="rounded-md bg-alianza-500 p-3">
              <Icon
                class="text-gray-100"
                name="heroicons:banknotes"
                size="32px"
              />
            </div>
            <h1 class="text-base font-medium">
              <span class="text-lg font-semibold text-gray-800">Quote</span>
              <br />
              Send your request through our communication channels and receive a
              quote. receive a quote.
            </h1>
          </li>
          <li class="flex items-center gap-6">
            <div class="rounded-md bg-alianza-500 p-3">
              <Icon
                class="text-gray-100"
                name="heroicons:shopping-cart"
                size="32px"
              />
            </div>
            <h1 class="text-base font-medium">
              <span class="text-lg font-semibold text-gray-800"
                >Place your order</span
              >
              <br />
              Alianza Shopping Club takes care of the whole process behind.
            </h1>
          </li>
          <li class="flex items-center gap-6">
            <div class="rounded-md bg-alianza-500 p-3">
              <Icon class="text-gray-100" name="heroicons:truck" size="32px" />
            </div>
            <h1 class="text-base font-medium">
              <span class="text-lg font-semibold text-gray-800"
                >Receive your product</span
              >
              <br />
              We make shipping easy for you, bringing your products to your
              home.
            </h1>
          </li>
        </ul>
      </div>
    </section>
    <Contactanos />
  </div>
</template>

<!-- <script setup lang="ts">
useSeoMeta({
  title: "Alianza Shopping Club, LLC",
  ogTitle: "Alianza Shopping Club, LLC",
  description:
    "Alianza Shopping Club, LCC is a global shopping service that helps its customers to have products from any store in the world.",
  ogDescription:
    "Alianza Shopping Club, LLC is a global shopping service that helps its customers to have products from any store in the world.",
  ogImage: "/ogImage.png",
  twitterCard: "summary_large_image",
});
</script> -->

<!-- <style>
.header-background {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("~/assets/img/grid.svg"), url("~/assets/img/imgAlianza.webp");
  background-size: auto, auto, cover;
}
</style> -->
