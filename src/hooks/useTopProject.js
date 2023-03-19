import { useEffect, useState } from "react";


const useTopProject = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch('topProject.json')
            .then(res=>res.json())
            .then(data=>setProject(data))
    }, []);

    return [project, setProject];
}

export default useTopProject;