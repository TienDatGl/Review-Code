const ul = document.querySelector('ul'),
	input = document.querySelector('input')

let tags = []

createTag()

    function createTag() {
	ul.innerHTML = ''
	    tags.forEach((tag, index) => {
		let liTag = `
            <li>${tag}
                <i class="fas fa-times" onclick="removeTag(this, '${index}')"></i>
            </li>
                     `
	ul.innerHTML += liTag
	})

	ul.appendChild(input)
	input.focus()
}

    function removeTag(element, index) {
	    tags.splice(index, 1)
        element.parentElement.remove()
        input.focus()
}

function checkPrinary(n)
{
        if(n<2)
            return false
        else {
            for(var i = 2; i< n-1; i++)
            {
                if (n%i == 0)
                {
                     return false
                //break;
                }
                else
                    return true
            }
    }
    
}

function addTag(e) {
	                                            if (e.key == 'Enter') {
		let tag = e.target.value.trim()
		if (tag != '' && !tags.includes(tag)) {
            if(checkPrinary(tag))
			tags.push(`${tag} is prime number`)
                else
            tags.push(`${tag} is not prime number`)
			    createTag()
		}
        e.target.value = ''
	}
}

    input.addEventListener('keyup', addTag)

    const removeBtn = document.querySelector('.btn-remove')
        removeBtn.addEventListener('click', () => {
	    tags.length = 0
        createTag()
})
