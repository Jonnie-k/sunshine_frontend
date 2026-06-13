import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Sun, LogOut, LayoutDashboard, BookOpen, User } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const navLinks = [
  { to: '/courses', label: 'Courses' },
  { to: '/about',   label: 'About'   },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { user, isAdmin, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
    setOpen(false)
  }

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-150 ${
      isActive
        ? 'text-amber-500'
        : 'text-navy-100 hover:text-amber-400'
    }`

  return (
    <header className="bg-navy-800 sticky top-0 z-50 shadow-md">
      <div className="section-wrapper">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
            <span className="bg-amber-500 text-white p-1.5 rounded-lg group-hover:bg-amber-400 transition-colors">
              <Sun size={18} strokeWidth={2.5} />
            </span>
            <span className="font-display font-800 text-white text-lg leading-tight">
              Sunshine<br />
              <span className="text-amber-400 text-xs font-600 tracking-widest uppercase">School</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>
            ))}
            {user && (
              <NavLink to="/my-applications" className={linkClass}>
                My Applications
              </NavLink>
            )}
            {isAdmin && (
              <NavLink to="/admin" className={linkClass}>
                <span className="flex items-center gap-1">
                  <LayoutDashboard size={14} /> Admin
                </span>
              </NavLink>
            )}
          </nav>

          {/* Desktop auth */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-navy-200 text-sm flex items-center gap-1.5">
                  <User size={14} /> {user.email}
                </span>
                <button onClick={handleLogout} className="btn-secondary !py-1.5 !px-3 !text-xs">
                  <LogOut size={14} /> Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login"    className="text-navy-100 hover:text-white text-sm font-medium transition-colors">Login</Link>
                <Link to="/register" className="btn-primary !py-1.5 !px-4">Apply Now</Link>
              </>
            )}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-1.5"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-900 border-t border-navy-700 px-4 pb-4 pt-2 space-y-1">
          {navLinks.map(l => (
            <NavLink
              key={l.to} to={l.to}
              className="block py-2 text-navy-100 hover:text-amber-400 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          {user && (
            <NavLink to="/my-applications" className="flex items-center gap-2 py-2 text-navy-100 hover:text-amber-400 text-sm" onClick={() => setOpen(false)}>
              <BookOpen size={15} /> My Applications
            </NavLink>
          )}
          {isAdmin && (
            <NavLink to="/admin" className="flex items-center gap-2 py-2 text-navy-100 hover:text-amber-400 text-sm" onClick={() => setOpen(false)}>
              <LayoutDashboard size={15} /> Admin
            </NavLink>
          )}
          <div className="pt-2 border-t border-navy-700">
            {user ? (
              <button onClick={handleLogout} className="flex items-center gap-2 text-navy-200 text-sm py-2">
                <LogOut size={15} /> Logout ({user.email})
              </button>
            ) : (
              <div className="flex gap-3 pt-1">
                <Link to="/login"    className="btn-secondary flex-1 justify-center" onClick={() => setOpen(false)}>Login</Link>
                <Link to="/register" className="btn-primary  flex-1 justify-center" onClick={() => setOpen(false)}>Apply Now</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}