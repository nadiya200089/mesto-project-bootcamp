//   редактирование профиля
import { closeByEsc, handleClosePopupOverlay} from './utils.js'

export const popupList = Array.from(document.querySelectorAll('.popup'));

export function openPopup(popupNode) {
    popupNode.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
    popupList.forEach(popup => {
        popup.addEventListener('mousedown', handleClosePopupOverlay)
    });
}
export function closePopup(popupNode) {
    popupNode.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc)
}




