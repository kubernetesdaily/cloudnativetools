/**
 * Every entry must include a title and link, the rest are optional.
 * For simplicity in merges, please add to the bottom of the object.
 *
 * interface
 * {
 *     title: string // display name
 *     link: string // the link for the website which contain learning resources
 *     description?: string // description that will be listed with your entry
 *     author?: string // your name/tag that will be listed
 *     github?: string // username on github that will display a link to your repo
 *     compatibleBrowsers?: array // browsers that this page is compatible with
 * }
 */

const entries = [
  {
    "title": "argocd",
    "link": NaN,
    "description": "Declarative continuous deployment for Kubernetes",
    "tag": "Continuous Integration & Delivery",
    "github": "argoproj/argo-cd"
  },
  {
    "title": "agola",
    "link": NaN,
    "description": "Agola: CI/CD Redefined",
    "tag": "Continuous Integration & Delivery",
    "github": "agola-io/agola"
  },
  {
    "title": "antrea",
    "link": NaN,
    "description": "Kubernetes networking based on Open vSwitch",
    "tag": "Networking",
    "github": "antrea-io/antrea"
  },
  {
    "title": "aptakub",
    "link": NaN,
    "description": "A modern, lightweight and multi-cluster desktop client for Kubernetes. Connect to multiple clusters simultaneously to view, edit and manage all your resources.",
    "tag": "Development Tools",
    "github": "aptakube/aptakube"
  },
  {
    "title": "apollo",
    "link": NaN,
    "description": "The logz.io continuous deployment solution over kubernetes",
    "tag": "Continuous Integration & Delivery",
    "github": "logzio/apollo"
  },
  {
    "title": "bfe",
    "link": NaN,
    "description": "Open-source layer 7 load balancer derived from proprietary Baidu FrontEnd Platform (BFE)",
    "tag": "Service Proxy & Mesh",
    "github": "bfenetworks/bfe"
  },
  {
    "title": "breeze",
    "link": NaN,
    "description": "Deploy a Production Ready Kubernetes Cluster with graphical interface",
    "tag": "Cluster Management",
    "github": "wise2c-devops/breeze"
  },
  {
    "title": "brigade",
    "link": NaN,
    "description": "Event-driven scripting for Kubernetes",
    "tag": "Continuous Integration & Delivery",
    "github": "brigadecore/brigade"
  },
  {
    "title": "bumblebee",
    "link": NaN,
    "description": "Get eBPF programs running from the cloud to the kernel in 1 line of bash",
    "tag": "Networking",
    "github": "solo-io/bumblebee"
  },
  {
    "title": "bytebase",
    "link": NaN,
    "description": "Reliable Database CI/CD for Developers and DBAs",
    "tag": "Continuous Integration & Delivery",
    "github": "bytebase/bytebase"
  },
  {
    "title": "calico",
    "link": NaN,
    "description": "Calico is an open source networking and network security solution for containers, virtual machines, and bare-metal workloads ",
    "tag": "Networking",
    "github": "projectcalico/calico"
  },
  {
    "title": "caddy",
    "link": NaN,
    "description": "Caddy is a powerful, enterprise-ready, open source web server with automatic HTTPS written in Go",
    "tag": "Service Proxy & Mesh",
    "github": "caddyserver/caddy"
  },
  {
    "title": "contour",
    "link": NaN,
    "description": "Contour is a Kubernetes ingress controller using Envoy proxy.",
    "tag": "Service Proxy & Mesh",
    "github": "projectcontour/contour"
  },
  {
    "title": "cilium",
    "link": NaN,
    "description": "eBPF-based Networking, Security, and Observability",
    "tag": "Networking",
    "github": "cilium/cilium"
  },
  {
    "title": "cnspec",
    "link": NaN,
    "description": "An open source, cloud-native security to protect everything from build to runtime",
    "tag": "Security",
    "github": "mondoohq/cnspec"
  },
  {
    "title": "cert-manager",
    "link": "https://kubedaily.com/blog/certmanager/",
    "description": "Automatically provision and manage TLS certificates in Kubernetes",
    "tag": "Networking",
    "github": "cert-manager/cert-manager"
  },
  {
    "title": "clusterman",
    "link": NaN,
    "description": "Clusterman - Autoscale and Manage your compute clusters",
    "tag": "Cluster Management",
    "github": "Yelp/clusterman"
  },
  {
    "title": "claudie",
    "link": NaN,
    "description": "Cloud-agnostic managed Kubernetes",
    "tag": "Cluster Management",
    "github": "berops/claudie"
  },
  {
    "title": "cluster-api",
    "link": NaN,
    "description": "Home for Cluster API, a subproject of sig-cluster-lifecycle",
    "tag": "Cluster Management",
    "github": "kubernetes-sigs/cluster-api"
  },
  {
    "title": "clusterpedia",
    "link": NaN,
    "description": "Clusterpedia is used for complex resource searches across multiple clusters, support simultaneous search of a single kind of resource or multiple kinds of resources existing in multiple clusters",
    "tag": "Cluster Management",
    "github": "clusterpedia-io/clusterpedia"
  },
  {
    "title": "coredns",
    "link": NaN,
    "description": "CoreDNS is a DNS server that chains plugins",
    "tag": "Networking",
    "github": "coredns/coredns"
  },
  {
    "title": "concourse",
    "link": NaN,
    "description": "Concourse is a container-based continuous thing-doer written in Go",
    "tag": "Continuous Integration & Delivery",
    "github": "concourse/concourse"
  },
  {
    "title": "drone",
    "link": NaN,
    "description": "Drone is a Container-Native, Continuous Delivery Platform",
    "tag": "Continuous Integration & Delivery",
    "github": "harness/drone"
  },
  {
    "title": "devtron",
    "link": NaN,
    "description": "Software Delivery Workflow for Kubernetes",
    "tag": "Continuous Integration & Delivery",
    "github": "devtron-labs/devtron"
  },
  {
    "title": "egress-operator",
    "link": NaN,
    "description": "A Kubernetes operator to produce egress gateway Envoy pods and control access to them with network policies",
    "tag": "Networking",
    "github": "monzo/egress-operator"
  },
  {
    "title": "envoy",
    "link": NaN,
    "description": "Cloud-native high-performance edge/middle/service proxy",
    "tag": "Service Proxy & Mesh",
    "github": "envoyproxy/envoy"
  },
  {
    "title": "eksctl",
    "link": NaN,
    "description": "Home for Cluster API, a subproject of sig-cluster-lifecycle",
    "tag": "Cluster Management",
    "github": "weaveworks/eksctl"
  },
  {
    "title": "flagger",
    "link": NaN,
    "description": "Progressive delivery Kubernetes operator (Canary, A/B Testing and Blue/Green deployments",
    "tag": "Continuous Integration & Delivery",
    "github": "weaveworks/flagger"
  },
  {
    "title": "garden",
    "link": NaN,
    "description": "Garden provides production-like Kubernetes testing environments for integration tests, QA, and development",
    "tag": "Development Tools",
    "github": "garden-io/garden"
  },
  {
    "title": "gefyra",
    "link": NaN,
    "description": "Gefyra blazingly-fast, rock-solid, local application development \u27a1\ufe0f with Kubernetes",
    "tag": "Development Tools",
    "github": "gefyrahq/gefyra"
  },
  {
    "title": "haproxy",
    "link": NaN,
    "description": "HAProxy Load Balancer's development branch (mirror of git.haproxy.org)",
    "tag": "Service Proxy & Mesh",
    "github": "haproxy/haproxy"
  },
  {
    "title": "harvester",
    "link": NaN,
    "description": "Open source hyperconverged infrastructure (HCI) software",
    "tag": "Cluster Management",
    "github": "harvester/harvester"
  },
  {
    "title": "hierarchical-namespaces",
    "link": NaN,
    "description": "Hierarchical namespaces make it easier to share your cluster by making namespaces more powerful",
    "tag": "Cluster Management",
    "github": "kubernetes-sigs/hierarchical-namespaces"
  },
  {
    "title": "inlets",
    "link": NaN,
    "description": "Secure HTTP and TCP tunnels that just work",
    "tag": "Service Proxy & Mesh",
    "github": "inlets/inlets-pro"
  },
  {
    "title": "ingress-nginx",
    "link": NaN,
    "description": "ingress-nginx is an Ingress controller for Kubernetes using NGINX as a reverse proxy and load balancer",
    "tag": "Networking",
    "github": "kubernetes/ingress-nginx"
  },
  {
    "title": "jkube",
    "link": NaN,
    "description": "Tools and plugins for Java developers that help you create container images along with the required manifests to deploy your applications to Kubernetes",
    "tag": "Development Tools",
    "github": "eclipse/jkube"
  },
  {
    "title": "jenkins",
    "link": NaN,
    "description": "Jenkins automation server",
    "tag": "Continuous Integration & Delivery",
    "github": "jenkinsci/jenkins"
  },
  {
    "title": "jenkins-x",
    "link": NaN,
    "description": "Jenkins X provides automated CI+CD for Kubernetes with Preview Environments on Pull Requests using Tekton, Knative, Lighthouse, Skaffold and Helm",
    "tag": "Continuous Integration & Delivery",
    "github": "jenkins-x/jx"
  },
  {
    "title": "kdigger",
    "link": NaN,
    "description": "Kubernetes focused container assessment and context discovery tool for penetration testing",
    "tag": "Security",
    "github": "quarkslab/kdigger"
  },
  {
    "title": "keda",
    "link": NaN,
    "description": "Event-driven Autoscaling in Kubernetes",
    "tag": "Cluster Management",
    "github": "kedacore/keda"
  },
  {
    "title": "keptn",
    "link": NaN,
    "description": "Cloud-native application life-cycle orchestration. Keptn automates your SLO-driven multi-stage delivery and operations & remediation of your applications",
    "tag": "Continuous Integration & Delivery",
    "github": "keptn/keptn"
  },
  {
    "title": "kind",
    "link": NaN,
    "description": "Kubernetes IN Docker - local clusters for testing Kubernetes",
    "tag": "Cluster Management",
    "github": "kubernetes-sigs/kind"
  },
  {
    "title": "keploy",
    "link": NaN,
    "description": "Testing for Developers. Toolkit that creates test-cases and data mocks from API calls, DB queries, etc.",
    "tag": "Continuous Integration & Delivery",
    "github": "keploy/keploy"
  },
  {
    "title": "ksniff",
    "link": NaN,
    "description": "Kubectl plugin to ease sniffing on kubernetes pods using tcpdump and wireshark",
    "tag": "Networking",
    "github": "eldadru/ksniff"
  },
  {
    "title": "kruise",
    "link": NaN,
    "description": "Kruise consists of several controllers which extend and complement the Kubernetes core controllers for workload management.",
    "tag": "Cluster Management",
    "github": "openkruise/kruise"
  },
  {
    "title": "ko",
    "link": NaN,
    "description": "ko is a tool for building and deploying Golang applications to Kubernetes.",
    "tag": "Development Tools",
    "github": "ko-build/ko"
  },
  {
    "title": "kubernetes-ingress-controller",
    "link": NaN,
    "description": "Configure plugins, health checking, load balancing and more in Kong for Kubernetes Services",
    "tag": "Networking",
    "github": "Kong/kubernetes-ingress-controller"
  },
  {
    "title": "konfig",
    "link": NaN,
    "description": "Konfig is a Kubernetes friendly Rails gem. It can load configuration and secrets from both YAML or folders with individual files and present them to your application the same way.",
    "tag": "Development Tools",
    "github": "cloud66-oss/konfig"
  },
  {
    "title": "kOps",
    "link": NaN,
    "description": "Kubernetes Operations (kOps) Production Grade k8s Installation, Upgrades and Management",
    "tag": "Cluster Management",
    "github": "kubernetes/kops"
  },
  {
    "title": "kubedirector",
    "link": NaN,
    "description": "KubeDirector uses standard Kubernetes (K8s) facilities of custom resources and API extensions to implement stateful scaleout application clusters.",
    "tag": "Cluster Management",
    "github": "bluek8s/kubedirector"
  },
  {
    "title": "kube-bench",
    "link": NaN,
    "description": "Checks whether Kubernetes is deployed according to security best practices as defined in the CIS Kubernetes Benchmark",
    "tag": "Security",
    "github": "aquasecurity/kube-bench"
  },
  {
    "title": "kube-ovn",
    "link": NaN,
    "description": "A Kubernetes Network Fabric for Enterprises that is Rich in Functions and Easy in Operations",
    "tag": "Networking",
    "github": "kubeovn/kube-ovn"
  },
  {
    "title": "kubenav",
    "link": NaN,
    "description": "kubenav is the navigator for your Kubernetes clusters right in your pocket",
    "tag": "Cluster Management",
    "github": "kubenav/kubenav"
  },
  {
    "title": "kubefwd",
    "link": NaN,
    "description": "Bulk port forwarding Kubernetes services for local development",
    "tag": "Networking",
    "github": "txn2/kubefwd"
  },
  {
    "title": "kubectl-warp",
    "link": NaN,
    "description": "Kubernetes CLI plugin for syncing and executing local files in Pod on Kubernetes",
    "tag": "Development Tools",
    "github": "ernoaapa/kubectl-warp"
  },
  {
    "title": "kubernix",
    "link": NaN,
    "description": "This project aims to provide single dependency Kubernetes clusters for local testing, experimenting and development purposes",
    "tag": "Development Tools",
    "github": "saschagrunert/kubernix"
  },
  {
    "title": "kubesphere",
    "link": NaN,
    "description": "The container platform tailored for Kubernetes multi-cloud, datacenter, and edge management",
    "tag": "Cluster Management",
    "github": "kubesphere/kubesphere"
  },
  {
    "title": "kube-hunter",
    "link": NaN,
    "description": "Hunt for security weaknesses in Kubernetes clusters",
    "tag": "Security",
    "github": "aquasecurity/kube-hunter"
  },
  {
    "title": "kubespray",
    "link": NaN,
    "description": "Deploy a Production Ready Kubernetes Cluster",
    "tag": "Cluster Management",
    "github": "kubernetes-sigs/kubespray"
  },
  {
    "title": "kubeletctl",
    "link": NaN,
    "description": "A client for kubelet",
    "tag": "Security",
    "github": "cyberark/kubeletctl"
  },
  {
    "title": "KubeArmor",
    "link": NaN,
    "description": "Cloud-native Runtime Security Enforcement System. Workload hardening and implementing least-permissive policies made easy",
    "tag": "Security",
    "github": "kubearmor/KubeArmor"
  },
  {
    "title": "kubicorn",
    "link": NaN,
    "description": "Simple, cloud native infrastructure for Kubernetes",
    "tag": "Cluster Management",
    "github": "kubicorn/kubicorn"
  },
  {
    "title": "kubeone",
    "link": NaN,
    "description": "Kubermatic KubeOne automate cluster operations on all your cloud, on-prem, edge, and IoT environments",
    "tag": "Cluster Management",
    "github": "kubermatic/kubeone"
  },
  {
    "title": "kubespray",
    "link": NaN,
    "description": "Deploy a Production Ready Kubernetes Cluster",
    "tag": "Cluster Management",
    "github": "kubernetes-sigs/kubespray"
  },
  {
    "title": "kubevious",
    "link": NaN,
    "description": "Kubevious renders all configurations relevant to the application in one place. That saves a lot of time from operators, eliminating the need for looking up settings and digging within selectors and labels",
    "tag": "Development Tools",
    "github": "kubevious/Kubevious"
  },
  {
    "title": "k0s",
    "link": NaN,
    "description": "k0s - The Zero Friction Kubernetes",
    "tag": "Cluster Management",
    "github": "k0sproject/k0s"
  },
  {
    "title": "k3d",
    "link": NaN,
    "description": "k3d,and Windows.,destroy,half the memory,highly available,is a tool for running local k3s clusters in docker. It's a single binary about 20 MB. You need to have docker installed",
    "tag": "Cluster Management",
    "github": "k3d-io/k3d"
  },
  {
    "title": "k3s",
    "link": NaN,
    "description": "Lightweight Kubernetes. Easy to install,Kubernetes clusters from the command line",
    "tag": "Cluster Management",
    "github": "rancher/k3s"
  },
  {
    "title": "liqo",
    "link": NaN,
    "description": "Liqo implements Dynamic resource sharing across different Kubernetes clusters (e.g.; offloading pods and services), supporting decentralized governance",
    "tag": "Cluster Management",
    "github": "liqotech/liqo"
  },
  {
    "title": "liquibase",
    "link": NaN,
    "description": "Liquibase helps release software faster by bringing DevOps to the database",
    "tag": "Continuous Integration & Delivery",
    "github": "liquibase/liquibase"
  },
  {
    "title": "matchbox",
    "link": NaN,
    "description": "Network boot and provision Fedora CoreOS and Flatcar Linux clusters",
    "tag": "Cluster Management",
    "github": "poseidon/matchbox"
  },
  {
    "title": "monokle",
    "link": NaN,
    "description": "Monokle streamlines the process of creating, analyzing, and deploying Kubernetes configurations by providing a unified visual tool for authoring YAML manifests, validating policies, and managing live clusters",
    "tag": "Cluster Management",
    "github": "kubeshop/monokle"
  },
  {
    "title": "metallb",
    "link": NaN,
    "description": "A network load-balancer implementation for Kubernetes using standard routing protocols",
    "tag": "Service Proxy & Mesh",
    "github": "metallb/metallb"
  },
  {
    "title": "metalk8s",
    "link": NaN,
    "description": "An opinionated Kubernetes distribution with a focus on long-term on-prem deployments",
    "tag": "Cluster Management",
    "github": "scality/metalk8s"
  },
  {
    "title": "microk8s",
    "link": NaN,
    "description": "MicroK8s is a small, fast, single-package Kubernetes for developers, IoT and edge",
    "tag": "Cluster Management",
    "github": "canonical/microk8s"
  },
  {
    "title": "minikube",
    "link": NaN,
    "description": "minikube implements a local Kubernetes cluster on macOS,Linux,all in a binary less than 100 MB.",
    "tag": "Cluster Management",
    "github": "kubernetes/minikube"
  },
  {
    "title": "nginx",
    "link": NaN,
    "description": "NGINX Reverse Proxy",
    "tag": "Service Proxy & Mesh",
    "github": "nginx/nginx"
  },
  {
    "title": "openelb",
    "link": NaN,
    "description": "Load Balancer Implementation for Kubernetes in Bare-Metal, Edge, and Virtualization",
    "tag": "Service Proxy & Mesh",
    "github": "openelb/openelb"
  },
  {
    "title": "openresty",
    "link": NaN,
    "description": "High Performance Web Platform Based on Nginx and LuaJIT",
    "tag": "Service Proxy & Mesh",
    "github": "openresty/openresty"
  },
  {
    "title": "okteto",
    "link": "https://kubedaily.com/blog/okteto/",
    "description": "okteto accelerates the development workflow of Kubernetes applications.",
    "tag": "Development Tools",
    "github": "okteto/okteto"
  },
  {
    "title": "peirates",
    "link": NaN,
    "description": "Peirates - Kubernetes Penetration Testing tool",
    "tag": "Security",
    "github": "inguardians/peirates"
  },
  {
    "title": "pipy",
    "link": NaN,
    "description": "Pipy is a programmable proxy for the cloud, edge and IoT. It's written in C++, which makes it extremely lightweight and fast. It's also fully programmable by using PipyJS, a tailored version from the standard JavaScript language.",
    "tag": "Service Proxy & Mesh",
    "github": "flomesh-io/pip"
  },
  {
    "title": "porter",
    "link": NaN,
    "description": "Porter enables you to package your application artifact, client tools, configuration and deployment logic together as an installer that you can distribute, and install with a single command.",
    "tag": "Development Tools",
    "github": "getporter/porter"
  },
  {
    "title": "Sentinel",
    "link": NaN,
    "description": "A powerful flow control component enabling reliability, resilience and monitoring for microservices",
    "tag": "Service Proxy & Mesh",
    "github": "alibaba/Sentinel"
  },
  {
    "title": "skipper",
    "link": NaN,
    "description": "An HTTP router and reverse proxy for service composition, including use cases like Kubernetes Ingress",
    "tag": "Service Proxy & Mesh",
    "github": "zalando/skipper"
  },
  {
    "title": "silver-surfer",
    "link": NaN,
    "description": "sealos is a Kubernetes distribution, a general-purpose cloud operating system for managing cloud-native applications",
    "tag": "Cluster Management",
    "github": "labring/sealos"
  },
  {
    "title": "submariner",
    "link": NaN,
    "description": "Connect all your Kubernetes clusters, no matter where they are in the world",
    "tag": "Networking",
    "github": "submariner-io/submariner"
  },
  {
    "title": "skippbox",
    "link": NaN,
    "description": "A Desktop application for k8sd",
    "tag": "Development Tools",
    "github": "skippbox/skippbox"
  },
  {
    "title": "spinnaker",
    "link": NaN,
    "description": "Spinnaker is an open source, multi-clouwith high velocity and confidence",
    "tag": "Continuous Integration & Delivery",
    "github": "spinnaker/spinnaker"
  },
  {
    "title": "tekton",
    "link": NaN,
    "description": "A cloud native continuous integration and delivery (CI/CD) solution",
    "tag": "Continuous Integration & Delivery",
    "github": "tektoncd/pipeline"
  },
  {
    "title": "tanka",
    "link": NaN,
    "description": "The clean, concise and super flexible alternative to YAML for your Kubernetes cluster",
    "tag": "Cluster Management",
    "github": "grafana/tanka"
  },
  {
    "title": "telepresence",
    "link": NaN,
    "description": "Telepresence provides fast, realistic local development for Kubernetes microservices",
    "tag": "Development Tools",
    "github": "telepresenceio/telepresence"
  },
  {
    "title": "tilt",
    "link": NaN,
    "description": "Tilt powers multi-service development and makes sure they behave",
    "tag": "Development Tools",
    "github": "tilt-dev/tilt"
  },
  {
    "title": "tye",
    "link": NaN,
    "description": "Tye is a developer tool that makes developing, testing, and deploying microservices and distributed applications easier",
    "tag": "Development Tools",
    "github": "dotnet/tye"
  },
  {
    "title": "typhoon",
    "link": NaN,
    "description": "Minimal and free Kubernetes distribution with Terraform",
    "tag": "Cluster Management",
    "github": "poseidon/typhoon"
  },
  {
    "title": "werf",
    "link": "https://kubedaily.com/blog/werf/",
    "description": "GitOps tool to deliver apps to Kubernetes and integrate this process with GitLab and other CI tools",
    "tag": "Continuous Integration & Delivery",
    "github": "werf/werf"
  },
  {
    "title": "Zuul",
    "link": NaN,
    "description": "Zuul is a gateway service that provides dynamic routing, monitoring, resiliency, security, and more.",
    "tag": "Service Proxy & Mesh",
    "github": "Netflix/zuul"
  }
];

export default entries;
