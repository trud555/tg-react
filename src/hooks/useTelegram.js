const tg = window.Telegram.WebApp;

export function useTelegram(){
    // закрыть окно с приложением
    const onClose = () => {
        tg.close()
      }
    // переключатель появления или скрытия главной кнопки в окне приложения
    const onToggleButton = () => {
        if(tg.MainButton.isVisible){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
        
    }
    return {
        onToggleButton,
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,

    }
}