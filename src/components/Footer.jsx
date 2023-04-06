import { React } from "react";
import GitHubButton from 'react-github-btn'
function Footer() {
    return <div className="bg-bgGray w-[100%]  py-6 lg:px-44 px-8   mx-auto">

        <div className="flex justify-between">
            <div>

        Designed by <a href="https://github.com/Jelsingeprajwal" target={"_blank"} className="font-semibold">Jelsinge Prajwal </a> Content Powered by <a href="https://twitter.com/CNCFolks" Content Powered by className="font-semibold"> @CloudNativeFolks </a> <a href="https://twitter.com/sangamtwts" Sangam Biradar > </a>
            
            </div>
            <div>
                {/* <!-- Place this tag where you want the button to render. --> */}
                <GitHubButton href="https://github.com/sangam14/Kubernetes-CloudNative-Toolkits" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star sangam14/Kubernetes-CloudNative-Toolkits on GitHub">Star</GitHubButton>
                <a href="https://visitorbadge.io/status?path=https%3A%2F%2Fkubedaily.com%2Ftools%2F"><img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fkubedaily.com%2Ftools%2F&label=Tools&labelColor=%2337d67a&countColor=%23ff8a65" /></a>
    </div>
        </div>

    </div>
}
export default Footer


