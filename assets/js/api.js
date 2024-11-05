async function fetchProfileData() {
    const url = './data/profile.json'
    const res = await fetch(url)
    const profileData = await res.json()
    return profileData
}