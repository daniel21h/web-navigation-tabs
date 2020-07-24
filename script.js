const $ = document.querySelector.bind(document);

function TabNavigation() {
  const html = {
    links: [...$('.tab-links').children],
    contents: [...$('.tab-content').children]
  }

  function hideAllTabContent() {
    html.contents.forEach(section => {
      section.style.display = 'none'
    })
  }

  function removeAllActiveClass() {

  }

  function showCurrentTab(id) {
    const tabContent = $('#' + id)
    tabContent.style.display = 'block'
  }

  function selectTab(event) {
    hideAllTabContent()

    const target = event.currentTarget
    showCurrentTab(target.dataset.id)
  }

  function listenForChange() {
    html.links.forEach(tab => {
      tab.addEventListener('click', selectTab)
    })
  }

  function init() {
    hideAllTabContent()
    listenForChange()
  }

  return {
    init
  }
}

window.addEventListener('load', () => {
  const tabNavigation = TabNavigation()
  tabNavigation.init()
})
