import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CloudCog,
  Code,
  TerminalSquare,
  Server,
  Database,
  Shield,
  Users,
  FileJson,
  Folder,
  FileX,
  FileCode,
  Monitor,
  ListFilter,
  Trash2,
  Save,
  RefreshCw,
  UserPlus,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 backdrop-blur-lg bg-gray-950/70">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rotate-3 bg-emerald-500 rounded-md blur-[8px] opacity-70"></div>
              <div className="absolute inset-0 bg-gray-950 rounded-md flex items-center justify-center border border-emerald-500/50">
                <span className="text-emerald-400 text-lg font-bold">⚡</span>
              </div>
            </div>
            <span className="font-bold text-white tracking-tight">HOSTING-CLUB.DE</span>
          </div>

          <nav className="hidden md:flex">
            <ul className="flex items-center gap-8 text-sm">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#upgrades" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Upgrades
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </nav>

          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300"
          >
            Join Discord
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden text-gray-400">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 sm:py-32">
        <div className="relative isolate">
          <div className="absolute -z-10 -top-20 left-1/2 -translate-x-1/2 transform-gpu blur-3xl" aria-hidden="true">
            <div
              className="aspect-[1155/678] w-[36rem] bg-gradient-to-tr from-emerald-500 to-emerald-300 opacity-20"
              style={{
                clipPath:
                  "polygon(74% 44%, 100% 61%, 97% 26%, 85% 0%, 32% 4%, 14% 33%, 0% 68%, 52% 90%, 87% 100%, 100% 100%, 74% 44%)",
              }}
            ></div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  FREE SERVERS WITH
                  <br />
                  MAXIMUM POWER!
                </h1>
                <p className="text-gray-400 text-lg max-w-[600px]">
                  Launch your projects with unlimited potential. High-performance, reliable, and completely free hosting
                  for developers and gamers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6">Explore Features</Button>
                <Button
                  variant="outline"
                  className="border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 px-8 py-6"
                >
                  Join Discord
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-gray-950 bg-gray-800 flex items-center justify-center text-xs text-white font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  Join <span className="text-emerald-400 font-semibold">1,200+</span> users who trust our platform
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-950/50 p-1 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-violet-500/10 blur-xl opacity-30 rounded-2xl"></div>
              <div className="relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-950/70">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-sm text-gray-400">server-dashboard.hosting-club.de</div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {["Memory", "CPU Load", "Uptime", "Disk Space"].map((stat, i) => (
                      <Card key={i} className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-4">
                          <div className="text-xs text-gray-400">{stat}</div>
                          <div className="text-sm font-semibold mt-1 text-emerald-400">
                            {i === 0 && "4GB / 8GB"}
                            {i === 1 && "32% Usage"}
                            {i === 2 && "18d 4h 27m"}
                            {i === 3 && "3.5GB / 20GB"}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-4 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                    {[Monitor, ListFilter, FileCode, Trash2, Folder, Save, Server, Users, RefreshCw].map((Icon, i) => (
                      <div
                        key={i}
                        className={`flex-shrink-0 p-2 rounded-md border ${i === 0 ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400" : "border-gray-700 bg-gray-800 text-gray-400"}`}
                      >
                        <Icon size={18} />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      { icon: FileJson, name: "server.json" },
                      { icon: Folder, name: "world" },
                      { icon: FileCode, name: "server.jar" },
                      { icon: FileX, name: "config.yml" },
                    ].map((file, i) => (
                      <Card key={i} className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-4 flex flex-col items-center justify-center">
                          <file.icon className="h-8 w-8 text-gray-400 mb-2" />
                          <div className="text-xs text-gray-500">{file.name}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32 bg-gray-950 border-y border-gray-800">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Powerful Features
            </h2>
            <p className="mt-4 text-gray-400">Everything you need to run your applications, bots, and game servers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CloudCog,
                title: "Completely Free",
                description: "No hidden fees or surprise charges ever. Free servers with premium-like performance.",
              },
              {
                icon: Code,
                title: "Node.js & Python",
                description: "Run bots, APIs, websites and apps with the latest Node.js and Python environments.",
              },
              {
                icon: Server,
                title: "Minecraft Servers",
                description: "Deploy and manage your Minecraft servers with just a few clicks.",
              },
              {
                icon: Database,
                title: "Double Performance",
                description: "Newly upgraded infrastructure with twice the processing power and memory.",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SSD storage, stable networking and DDoS protection for all your projects.",
              },
              {
                icon: Users,
                title: "Community Support",
                description: "Get help from our community experts to optimize your projects.",
              },
            ].map((feature, i) => (
              <Card key={i} className="bg-gray-900/50 border-gray-800 overflow-hidden group">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 rounded-xl overflow-hidden border border-gray-800 bg-gray-900/50">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-950/70">
              <TerminalSquare size={16} className="text-emerald-400" />
              <div className="text-sm text-gray-400">Terminal</div>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="mb-2">
                <span className="text-emerald-400">user@hosting-club:~$</span>{" "}
                <span className="text-white">node --version</span>
              </div>
              <div className="text-gray-400 mb-4 pl-6">v20.11.1</div>

              <div className="mb-2">
                <span className="text-emerald-400">user@hosting-club:~$</span>{" "}
                <span className="text-white">python3 --version</span>
              </div>
              <div className="text-gray-400 mb-4 pl-6">Python 3.10.12</div>

              <div className="mb-2">
                <span className="text-emerald-400">user@hosting-club:~$</span>{" "}
                <span className="text-white">java -version</span>
              </div>
              <div className="text-gray-400 mb-4 pl-6">
                openjdk version "17.0.9" 2023-10-17
                <br />
                OpenJDK Runtime Environment (build 17.0.9+9)
                <br />
                OpenJDK 64-Bit Server VM (build 17.0.9+9, mixed mode)
              </div>

              <div>
                <span className="text-emerald-400">user@hosting-club:~$</span>{" "}
                <span className="text-white cursor-blink">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrades Section */}
      <section id="upgrades" className="py-24 sm:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Upgrade On Request
            </h2>
            <p className="mt-4 text-gray-400">Need even more resources? We've got you covered!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔧",
                title: "Extra RAM",
                description: "Boost your server's memory for handling larger workloads and more concurrent users.",
                features: ["Additional RAM allocation", "Faster processing", "Support multiple instances"],
              },
              {
                icon: "💾",
                title: "Extra Storage",
                description: "Expand your storage capacity for larger applications, media files, and databases.",
                features: ["Additional SSD storage", "Fast read/write speeds", "Regular backups"],
              },
              {
                icon: "⚙️",
                title: "Custom Configuration",
                description:
                  "Need a specialized setup? Our team can create a custom configuration for your unique needs.",
                features: ["Tailored server setup", "Special software installations", "Priority support"],
              },
            ].map((upgrade, i) => (
              <Card key={i} className="bg-gray-900/50 border-gray-800 overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl">{upgrade.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{upgrade.title}</h3>
                  <p className="text-gray-400 mb-6">{upgrade.description}</p>

                  <ul className="space-y-2 mb-8">
                    {upgrade.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <span className="text-emerald-400 mr-2">✓</span>
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Request Upgrade</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 sm:py-32 bg-gray-950 border-t border-gray-800">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Join Our Community
            </h2>
            <p className="mt-4 text-gray-400">Connect with developers, gamers, and experts</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-sm text-gray-300">
                <UserPlus size={16} className="text-emerald-400" />
                <span>1,200+ members and growing</span>
              </div>

              <h3 className="text-2xl font-bold text-white">Get Help & Connect With Others</h3>

              <p className="text-gray-400">
                Join our active Discord community to get instant support, share your projects, and connect with other
                developers and gamers. Our team and community members are always ready to help optimize your projects
                and answer any questions.
              </p>

              <ul className="space-y-3">
                {[
                  "Direct support from server experts",
                  "Share your projects and get feedback",
                  "Find collaborators for your next idea",
                  "Stay updated on platform improvements",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                      <ChevronRight size={14} />
                    </div>
                    <span className="text-gray-400">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.942 1.556C16.942 1.556 15.704 0.655 14.278 0.374C14.277 0.374 14.275 0.373 14.274 0.373C14.155 0.345 14.037 0.414 13.983 0.527C13.983 0.528 13.983 0.528 13.983 0.528C13.816 0.894 13.673 1.337 13.573 1.70C12.075 1.436 10.592 1.436 9.119 1.70C9.019 1.336 8.874 0.893 8.705 0.527C8.651 0.414 8.533 0.345 8.414 0.373C8.413 0.373 8.411 0.374 8.41 0.374C6.985 0.655 5.746 1.556 5.746 1.556C5.746 1.556 5.746 1.556 5.745 1.556C4.153 3.926 3.693 6.227 3.891 8.493V8.494C3.892 8.494 3.893 8.495 3.893 8.496C3.894 8.499 3.895 8.502 3.898 8.504C4.606 9.443 5.85 10.089 7.064 10.513C7.065 10.513 7.065 10.513 7.065 10.513C7.167 10.546 7.273 10.501 7.325 10.406C7.325 10.406 7.325 10.406 7.325 10.406C7.326 10.406 7.326 10.405 7.326 10.405C7.786 9.695 8.19 8.934 8.495 8.124C8.497 8.119 8.496 8.114 8.492 8.11C8.489 8.107 8.483 8.105 8.478 8.107C8.478 8.107 8.477 8.107 8.477 8.107C8.475 8.108 8.473 8.109 8.471 8.11C8.078 8.264 7.669 8.387 7.25 8.475C7.242 8.478 7.237 8.486 7.24 8.493C7.241 8.498 7.246 8.501 7.251 8.501C7.36 8.579 7.467 8.661 7.572 8.744C7.574 8.746 7.576 8.747 7.579 8.747C7.581 8.747 7.583 8.747 7.585 8.746C9.421 7.919 11.459 7.919 13.273 8.746C13.275 8.747 13.278 8.747 13.28 8.747C13.282 8.747 13.285 8.746 13.286 8.744C13.392 8.661 13.499 8.579 13.608 8.501C13.613 8.501 13.618 8.498 13.619 8.493C13.622 8.486 13.617 8.478 13.61 8.475C13.19 8.387 12.781 8.264 12.387 8.11C12.385 8.109 12.383 8.108 12.381 8.107C12.381 8.107 12.38 8.107 12.38 8.107C12.375 8.105 12.369 8.107 12.366 8.11C12.363 8.114 12.361 8.119 12.364 8.124C12.674 8.934 13.077 9.695 13.533 10.405C13.533 10.405 13.533 10.406 13.534 10.406C13.534 10.406 13.534 10.406 13.534 10.406C13.586 10.501 13.693 10.546 13.794 10.513C13.794 10.513 13.794 10.513 13.794 10.513C15.01 10.089 16.255 9.443 16.962 8.504C16.965 8.502 16.966 8.499 16.967 8.496C16.967 8.495 16.968 8.494 16.968 8.494V8.493C17.207 5.866 16.505 3.582 15.043 1.556C15.042 1.556 15.042 1.556 15.042 1.556C15.042 1.556 15.042 1.556 16.942 1.556Z"
                    fill="white"
                  />
                  <path
                    d="M7.547 6.824C6.763 6.824 6.119 7.53 6.119 8.395C6.119 9.258 6.771 9.966 7.547 9.966C8.33 9.966 8.982 9.258 8.982 8.395C8.988 7.53 8.33 6.824 7.547 6.824ZM13.351 6.824C12.568 6.824 11.924 7.53 11.924 8.395C11.924 9.258 12.576 9.966 13.351 9.966C14.135 9.966 14.787 9.258 14.787 8.395C14.787 7.53 14.135 6.824 13.351 6.824Z"
                    fill="white"
                  />
                </svg>
                Join Our Discord
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 blur-xl opacity-30 rounded-2xl -m-4"></div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Discord Community"
                  width={600}
                  height={600}
                  className="rounded-xl border border-gray-800 shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Users size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Active members</div>
                      <div className="text-white font-bold">1,200+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rotate-3 bg-emerald-500 rounded-md blur-[8px] opacity-70"></div>
                <div className="absolute inset-0 bg-gray-950 rounded-md flex items-center justify-center border border-emerald-500/50">
                  <span className="text-emerald-400 text-lg font-bold">⚡</span>
                </div>
              </div>
              <span className="font-bold text-white tracking-tight">HOSTING-CLUB.DE</span>
            </div>

            <nav>
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#upgrades" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                    Upgrades
                  </Link>
                </li>
                <li>
                  <Link href="#community" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500">© 2025 Hosting-Club.de. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

