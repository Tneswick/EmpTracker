function parseManager (name) {
    if (name === 'James Fraser') {
        return 1
    }
    if (name === 'Jack London') {
        return 2
    }
    if (name === 'Robert Bruce') {
        return 3
    }
    if (name === 'John Doe') {
        return 5
    }
    if (name === 'Bruce Wayne') {
        return 7
    }
    if (name === 'None') {
        return 'NULL'
    }
}

function parseRole(role) {
    if(role === 'Salesperson') {
        return 1
    }
    if(role === 'Software Engineer') {
        return 2
    }
    if(role === 'Customer Service') {
        return 3
    }
    if(role === 'Legal Team Lead') {
        return 4
    }
    if(role === 'Lawyer') {
        return 5
    }
    if(role === 'Lead Engineer') {
        return 6
    }
    if(role === 'Lead Salesperson') {
        return 7
    }
}

module.exports = {
    parseManager,
    parseRole
}