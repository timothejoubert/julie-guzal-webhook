export default defineEventHandler((event) => {
    const { githubUserToken } = useRuntimeConfig(event)

    return $fetch('https://api.github.com/repos/timothejoubert/julie-guzal/dispatches', {
        method: 'POST',
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `token ${githubUserToken}`,
        },
        body: {
            event_type: 'run_github_actions_deploy_from_custom_endpoint',
            client_payload: {
                unit: false,
                integration: true,
            },
        },
    })
})
