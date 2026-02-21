import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '../../config/contact'

export default function WhatsAppButton() {
  const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(WHATSAPP_MESSAGE)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 999,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: '#2E7D6F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s ease'
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.77L0 32l8.43-2.01A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.894 22.323c-.333.937-1.948 1.79-2.678 1.903-.687.108-1.552.153-2.504-.158-.577-.19-1.317-.444-2.256-.87-3.97-1.714-6.562-5.72-6.76-5.986-.196-.265-1.6-2.126-1.6-4.056 0-1.93 1.013-2.878 1.372-3.27a1.44 1.44 0 0 1 1.044-.49c.26 0 .52.003.748.014.24.012.562-.091.88.671.332.796 1.126 2.726 1.225 2.923.1.196.163.425.033.685-.13.26-.196.421-.392.648-.196.228-.413.508-.588.683-.196.196-.4.408-.172.8.228.392.013.37 1.013 1.696 1 1.326 1.826 1.74 2.087 1.936.261.196.521.163.717-.033.196-.196.84-.979 1.065-1.315.224-.336.448-.28.748-.168.3.112 1.894.893 2.219 1.056.325.163.542.244.62.38.08.136.08.784-.253 1.72z" />
      </svg>
    </a>
  )
}