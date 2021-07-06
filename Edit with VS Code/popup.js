const vs = document.querySelector('.vs')
const atom = document.querySelector('.atom')
const subl = document.querySelector('.subl')
const note = document.querySelector('.note')
const npp = document.querySelector('.npp')
const span = document.querySelector('span')

vs.addEventListener('click', () => {
	chrome.storage.sync.set(
		{
			editor: "'Code'",
		},
		() => {
			span.innerText = "'Code'"
			vs.style.background = '#f3f3f3'
			atom.style.background = '#fefefe'
			subl.style.background = '#fefefe'
			note.style.background = '#fefefe'
			npp.style.background = '#fefefe'
		}
	)
})
atom.addEventListener('click', () => {
	chrome.storage.sync.set(
		{
			editor: "'Atom'",
		},
		() => {
			span.innerText = "'Atom'"
			atom.style.background = '#f3f3f3'
			vs.style.background = '#fefefe'
			subl.style.background = '#fefefe'
			note.style.background = '#fefefe'
			npp.style.background = '#fefefe'
		}
	)
})
subl.addEventListener('click', () => {
	chrome.storage.sync.set(
		{
			editor: "'Sublime'",
		},
		() => {
			span.innerText = "'Sublime'"
			subl.style.background = '#f3f3f3'
			atom.style.background = '#fefefe'
			vs.style.background = '#fefefe'
			note.style.background = '#fefefe'
			npp.style.background = '#fefefe'
		}
	)
})
note.addEventListener('click', () => {
	chrome.storage.sync.set(
		{
			editor: "'Np'",
		},
		() => {
			span.innerText = "'Np'"
			note.style.background = '#f3f3f3'
			atom.style.background = '#fefefe'
			subl.style.background = '#fefefe'
			vs.style.background = '#fefefe'
			npp.style.background = '#fefefe'
		}
	)
})
npp.addEventListener('click', () => {
	chrome.storage.sync.set(
		{
			editor: "'Np++'",
		},
		() => {
			span.innerText = "'Np++'"
			npp.style.background = '#f3f3f3'
			atom.style.background = '#fefefe'
			subl.style.background = '#fefefe'
			note.style.background = '#fefefe'
			vs.style.background = '#fefefe'
		}
	)
})

chrome.storage.sync.get(['editor'], (resp) => {
	span.innerHTML = resp.editor
})