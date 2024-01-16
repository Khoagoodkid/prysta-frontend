import { Logo } from "@/icons/Logo"

export const Footer = () => {
    return (
        <footer className="px-6 pt-6 bg-black text-white md:px-12 lg:pt-10 xl:px-16">
            <div className="max-w-content mx-auto">
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 xl:grid-cols-12">
                    <div className="col-span-2 md:col-span-4 xl:col-span-6 xl:max-w-[320px]">
                        <div className="w-[154px]">
                            <Logo/>
                        </div>
                        <h1 className="text-base-v2-5 mt-8 lg:mt-6">
                            Prysta is a gaming ecosystem powered by Prysta Ethereum L2 scaling solution.
                        </h1>
                        <div className="mt-12 hidden xl:block">
                            {/* <CommunityCta /> */}
                        </div>
                    </div>
                    <div className="xl:col-span-2">
                        {/* <FooterBlock title={ECOSYSTEM_LINKS.title} blocks={ECOSYSTEM_LINKS.blocks} /> */}
                    </div>
                    <div className="xl:col-span-2">
                        {/* <FooterBlock title={DEVELOPER_LINKS.title} blocks={DEVELOPER_LINKS.blocks} /> */}
                    </div>
                    <div className="xl:col-span-2">
                        {/* <FooterBlock title={ABOUT_LINKS.title} blocks={ABOUT_LINKS.blocks} /> */}
                    </div>
                    <div className="md:order-2 xl:hidden">
                        {/* <CommunityCta /> */}
                    </div>
                </div>
                <div className="text-base/8 pt-8 pb-12 md:pb-6 lg:mt-[90px] lg:flex lg:justify-between lg:border-t lg:border-white/5 lg:pt-5">
                    <p>© Copyright 2024 Myria</p>
                    <p className="lg:flex lg:gap-x-12">
                        <a href={'/terms-conditions'}>Terms of Services</a>
                        <span className="mx-2 lg:hidden">|</span>
                        <a href={'/privacy'}>Privacy Policy</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}