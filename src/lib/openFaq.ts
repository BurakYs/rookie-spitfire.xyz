export default function openFaq(faqId: string) {
    const targetElement = document.querySelector(`.${faqId}`)! as HTMLElement;
    const accordion = document.querySelector(`.${faqId} .accordion`)! as HTMLElement;
    const areasBottom = document.querySelector(`.${faqId} .areasbottom`)! as HTMLElement;
    const areasTop = document.querySelector(`.${faqId} .areastop`)! as HTMLElement;
    const icon = document.querySelector(`.${faqId} .areastop .areasright button .icon .i2`)! as HTMLElement;
    const faqElements = document.querySelector('.faq')!.children;

    if (targetElement.id === 'faqClosed') {
        for (let i = 0; i < faqElements.length; i++) {
            if (faqElements[i].id === 'faqOpened' && faqElements[i].classList[1] !== faqId) {
                const faqElement = {
                    element: document.querySelector(`.${faqElements[i].classList[1]}`),
                    icon: (document.querySelector(`.${faqElements[i].classList[1]} .areastop .areasright button .icon .i2`) as HTMLElement).style,
                    accordion: (document.querySelector(`.${faqElements[i].classList[1]} .accordion`) as HTMLElement)!,
                    style: (document.querySelector(`.${faqElements[i].classList[1]} .areastop`)! as HTMLElement)!.style
                };
                faqElement.accordion.style.height = '0px';
                faqElement.style.borderBottom = 'none';
                faqElement.element!.id = 'faqClosed';
                faqElement.icon.display = 'flex';
            }
        }
        areasTop.style.borderBottom = '1px solid rgba(55,56,58,.7)';
        accordion.style.height = areasBottom.clientHeight + 'px';
        targetElement.id = 'faqOpened';
        icon.style.display = 'none';
    } else {
        accordion.style.height = '0px';
        areasTop.style.borderBottom = 'none';
        targetElement.id = 'faqClosed';
        icon.style.display = 'flex';
    }
}