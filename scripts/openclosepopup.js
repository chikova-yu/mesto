/*открытие любого попапа*/
function openPopup(popup) {
    popup.classList.add('popup_active');
    document.addEventListener('keydown', closePopupByEsc);
};
  
/*закрытие любого попапа*/
  function closePopup(popup) {
    popup.classList.remove('popup_active');
    document.removeEventListener('keydown', closePopupByEsc);
};
  
//закрытие попаов по нажатию на Esc
  const closePopupByEsc = (evt) => {
    if (evt.key === 'Escape') {
      const modalOpened = document.querySelector('.popup_active');
      closePopup(modalOpened);
    };
};

export { openPopup, closePopup }