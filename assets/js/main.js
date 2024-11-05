function updateInformationData(profile){
    const avatar = document.getElementById("profile.avatar")
    avatar.src = profile.photo
    avatar.alt = profile.name
    
    const nome = document.getElementById("profile.name")
    nome.innerText = profile.name

    const job = document.getElementById("profile.job")
    job.innerText = profile.job

    const location = document.getElementById("profile.location")
    location.innerText = profile.location

    const phone = document.getElementById("profile.phone")
    phone.innerText = profile.phone

    const email = document.getElementById("profile.email")
    email.innerText = profile.email
}

function updateSkills(profile){
    const hardSkills = document.getElementById("profile.hardSkills")
    const softSkills = document.getElementById("profile.softSkills")
    
    hardSkills.innerHTML = profile.skills.hardSkills.map(hardSkills => {
        return `
            <picture>
                <img src="${hardSkills.logo}" alt="${hardSkills.name} title="${hardSkills.name}"">
            </picture>
        `
    }).join('')

    softSkills.innerHTML = profile.skills.softSkills.map(softSkills => {
        return `
            <li>${softSkills}</li>
        `
    }).join('')
}

function updateLanguages(profile) {
    const language = document.getElementById("profile.language")
    language.innerHTML = profile.languages.map(language => {
        return `
            <li>
                ${language}                    
            </li>
        `
    }).join('')
}

function updateEducation(profile) {
    const badges = document.getElementById("profile.badges")
    const courses = document.getElementById("profile.courses")

    badges.innerHTML = profile.education.badges.map(badge => {
        return `
            <li><img src="${badge.url}" alt="${badge.name}"></li>
        `
    }).join('')

    courses.innerHTML = profile.education.courses.map(course => {
        return `
            <h3>${course.name}</h3>
            <p>${course.description}</p>
        `
    }).join('')
}

function updatePortifolio(profile) {
    const portfolio = document.getElementById("profile.portfolio")
    portfolio.innerHTML = profile.portfolio.map(item => {
        return `
            <div>
                <h3 class="${item.github ? "github":""}">
                    ${item.name}
                </h3>
                <a class="portfolio__link" href="${item.url}" target="_blank">
                    ${item.url}
                </a>
            </div>
        `
    }).join('')
}

function updateProfessionalExperience(profile) {
    const profissionalExperience = document.getElementById("profile.profissionalExperience")
    profissionalExperience.innerHTML = profile.professionalExperience.map(experience => {
        return `
            <div class="experiencia__item">
                <h3>${experience.name}</h3>
                <p>
                    <svg width="14" height="18" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 24.6766C0 26.2444 1.30331 27.53 2.89272 27.53H21.1073C22.6967 27.53 24 26.2444 24 24.6766V12.3535H0V24.6766ZM17.8649 14.7366C18.9457 14.7366 19.8358 15.6146 19.8358 16.6807C19.8358 17.7468 18.9457 18.6248 17.8649 18.6248C16.7841 18.6248 15.894 17.7468 15.894 16.6807C15.894 15.6146 16.7841 14.7366 17.8649 14.7366ZM11.9841 14.7366C13.0649 14.7366 13.955 15.6146 13.955 16.6807C13.955 17.7468 13.0649 18.6248 11.9841 18.6248C10.9033 18.6248 10.0132 17.7468 10.0132 16.6807C10.0132 15.6146 10.9033 14.7366 11.9841 14.7366ZM11.9841 20.0358C13.0649 20.0358 13.955 20.9138 13.955 21.9799C13.955 23.046 13.0649 23.8926 11.9841 23.8926C10.9033 23.8926 10.0132 23.0147 10.0132 21.9486C10.0132 20.8824 10.9033 20.0358 11.9841 20.0358ZM6.10331 20.0358C7.18411 20.0358 8.07417 20.9138 8.07417 21.9799C8.07417 23.046 7.18411 23.8926 6.10331 23.8926C5.02252 23.8926 4.13245 23.0147 4.13245 21.9486C4.13245 20.8824 5.02252 20.0358 6.10331 20.0358Z" fill="white"/>
                        <path d="M24 5.96813C24 4.4336 22.695 3.17529 21.1034 3.17529H20.435V4.1267C20.435 6.18297 18.6844 7.87094 16.5517 7.87094C14.4191 7.87094 12.7003 6.18297 12.7003 4.1267V3.17529H11.2997V4.1267C11.2997 6.18297 9.54907 7.87094 7.41645 7.87094C5.28382 7.87094 3.56499 6.18297 3.56499 4.1267V3.17529H2.89655C1.30504 3.17529 0 4.4336 0 5.96813V10.2341H24V5.96813Z" fill="white"/>
                        <path d="M7.4151 6C8.38284 6 9.1798 5.09189 9.1798 3.98919V2.01081C9.1798 0.908108 8.38284 0 7.4151 0C6.44735 0 5.65039 0.908108 5.65039 2.01081V4.02162C5.67885 5.09189 6.44735 6 7.4151 6Z" fill="white"/>
                        <path d="M16.4099 6C17.4744 6 18.3511 5.09189 18.3511 3.98919V2.98378V2.01081C18.3511 0.908108 17.4744 0 16.4099 0C15.3454 0 14.4688 0.908108 14.4688 2.01081V3.01622V4.02162C14.4688 5.09189 15.3454 6 16.4099 6Z" fill="white"/>
                    </svg>
                    ${experience.period}
                </p>
                <p>
                    ${experience.description}
                </p>
            </div>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    
    updateInformationData(profileData)
    updateSkills(profileData)
    updateLanguages(profileData)
    updateEducation(profileData)
    updatePortifolio(profileData)
    updateProfessionalExperience(profileData)
})()