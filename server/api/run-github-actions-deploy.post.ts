export default defineEventHandler((event) => {
    const runtimeConfig = useRuntimeConfig(event)
    
    return $fetch('https://api.github.com/repos/timothejoubert/julie-guzal/dispatches', {
        method: 'POST',
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `token ${runtimeConfig?.githubUserToken}`,
        },
        body: {
            event_type: 'prismic_publish_trigger',
            client_payload: {
                unit: false,
                integration: true,
            },
        },
    })
})
