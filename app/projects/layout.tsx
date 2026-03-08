import React from 'react'
import ProjectsGsapWrapper from './components/ProjectsGsapWrapper'
import ProjectsNav from './components/ProjectsNav'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <ProjectsGsapWrapper>
            <ProjectsNav />
            {children}
        </ProjectsGsapWrapper>
    )
}

export default layout