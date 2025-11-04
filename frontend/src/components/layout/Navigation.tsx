import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'

const navigation = [
  { name: 'Discover', to: '/' },
  { name: 'Destinations', to: '/destinations' },
  { name: 'Experiences', to: '/experiences' },
  { name: 'Planner', to: '/planner' },
]

const gradientBorder =
  'before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-brand-500 before:via-brand-400 before:to-accent before:opacity-70 before:blur-2xl before:-z-10'

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/20 backdrop-blur-xl bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="group relative flex items-center space-x-3 rounded-full bg-white/70 px-5 py-2 font-display text-xl font-semibold text-brand-700 shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
        >
          <span className={`relative ${gradientBorder}`}>Aurora Armenia</span>
        </Link>
        <nav className="hidden items-center space-x-8 text-sm font-medium text-slate-600 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.to
            return (
              <Link
                key={item.name}
                to={item.to}
                className={`relative transition hover:text-brand-600 ${
                  isActive ? 'text-brand-600' : ''
                }`}
              >
                {isActive && (
                  <span className="absolute -left-3 -right-3 -top-2 bottom-0 -z-10 rounded-full bg-brand-500/10" />
                )}
                {item.name}
              </Link>
            )
          })}
        </nav>
        <div className="hidden md:flex">
          <Link
            to="/planner"
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01]"
          >
            Design your journey
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-white/80 p-2 text-brand-600 shadow-lg md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
          <span className="sr-only">Open navigation</span>
        </button>
      </div>

      <Transition show={mobileOpen} as={Fragment}>
        <Dialog as="div" className="md:hidden" onClose={setMobileOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-30 bg-slate-900/50" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 z-40 w-full max-w-sm overflow-y-auto bg-white/95 px-6 pb-6 pt-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="font-display text-xl font-semibold text-brand-700"
                onClick={() => setMobileOpen(false)}
              >
                Aurora Armenia
              </Link>
              <button
                type="button"
                className="rounded-md p-2 text-brand-600"
                onClick={() => setMobileOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" />
                <span className="sr-only">Close navigation</span>
              </button>
            </div>
            <div className="mt-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition ${
                    pathname === item.to
                      ? 'bg-brand-50 text-brand-600'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to="/planner"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent px-5 py-3 text-sm font-semibold text-white shadow-glow"
              >
                Start planning
              </Link>
            </div>
          </div>
        </Dialog>
      </Transition>
    </header>
  )
}
