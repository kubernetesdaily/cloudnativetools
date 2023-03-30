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
  //A

  {
    title: "liquibase",
    link: "",
    description:
      "Liquibase helps release software faster by bringing DevOps to the database.",
    tag: "Continuous Integration & Delivery",
    github: "liquibase/liquibase",
  },

  {
    title: "argocd",
    link: "",
    description: "Declarative continuous deployment for Kubernetes",
    tag: "Continuous Integration & Delivery",
    github: "argoproj/argo-cd",
  },

  {
    title: "agola",
    link: "",
    description: "Agola: CI/CD Redefined ",
    tag: "Continuous Integration & Delivery",
    github: "agola-io/agola",
  },

  {
    title: "antrea",
    link: "",
    description: "Kubernetes networking based on Open vSwitch",
    tag: "Networking",
    github: "antrea-io/antrea",
  },

  {
    title: "aptakub",
    link: "",
    description:
      "A modern, lightweight and multi-cluster desktop client for Kubernetes. Connect to multiple clusters simultaneously to view, edit and manage all your resources.",
    tag: "Development Tools",
    github: "aptakube/aptakube",
  },

  {
    title: "apollo",
    link: "",
    description: "The logz.io continuous deployment solution over kubernetes",
    tag: "Continuous Integration & Delivery",
    github: "logzio/apollo",
  },

  //b

  {
    title: "breeze",
    link: "",
    description:
      "Deploy a Production Ready Kubernetes Cluster with graphical interface",
    tag: "Cluster Management",
    github: "wise2c-devops/breeze",
  },

  {
    title: "brigade",
    link: "",
    description: "Event-driven scripting for Kubernetes",
    tag: "Continuous Integration & Delivery",
    github: "brigadecore/brigade",
  },

  {
    title: "bumblebee",
    link: "",
    description:
      "Get eBPF programs running from the cloud to the kernel in 1 line of bash",
    tag: "Networking",
    github: "solo-io/bumblebee",
  },

  {
    title: "bytebase",
    link: "",
    description: "Reliable Database CI/CD for Developers and DBAs",
    tag: "Continuous Integration & Delivery",
    github: "bytebase/bytebase",
  },

  //c

  {
    title: "calico",
    link: "",
    description:
      " Calico is an open source networking and network security solution for containers, virtual machines, and bare-metal workloads .",
    tag: "Networking",
    github: "projectcalico/calico",
  },

  {
    title: "cilium",
    link: "",
    description: " eBPF-based Networking, Security, and Observability.",
    tag: "Networking",
    github: "cilium/cilium",
  },

  {
    title: "cert-manager",
    link: "",
    description:
      " Automatically provision and manage TLS certificates in Kubernetes.",
    tag: "Networking",
    github: "cert-manager/cert-manager",
  },

  {
    title: "clusterman",
    link: "",
    description: "Clusterman - Autoscale and Manage your compute clusters",
    tag: "Cluster Management",
    github: "Yelp/clusterman",
  },

  {
    title: "claudie",
    link: "",
    description: "Cloud-agnostic managed Kubernetes",
    tag: "Cluster Management",
    github: "berops/claudie",
  },

  {
    title: "cluster-api",
    link: "",
    description: "Home for Cluster API, a subproject of sig-cluster-lifecycle",
    tag: "Cluster Management",
    github: "kubernetes-sigs/cluster-api",
  },

  {
    title: "clusterpedia",
    link: "",
    description:
      "Clusterpedia is used for complex resource searches across multiple clusters, support simultaneous search of a single kind of resource or multiple kinds of resources existing in multiple clusters",
    tag: "Cluster Management",
    github: "clusterpedia-io/clusterpedia",
  },

  {
    title: "coredns",
    link: "",
    description: "CoreDNS is a DNS server that chains plugins",
    tag: "Networking",
    github: "coredns/coredns",
  },

  {
    title: "concourse",
    link: "",
    description:
      "Concourse is a container-based continuous thing-doer written in Go",
    tag: "Continuous Integration & Delivery",
    github: "concourse/concourse",
  },

  //d

  {
    title: "drone",
    link: "",
    description: "Drone is a Container-Native, Continuous Delivery Platform",
    tag: "Continuous Integration & Delivery",
    github: "harness/drone",
  },

  {
    title: "devtron",
    link: "",
    description: "Software Delivery Workflow for Kubernetes",
    tag: "Continuous Integration & Delivery",
    github: "devtron-labs/devtron",
  },

  // e

  {
    title: "egress-operator",
    link: "",
    description:
      "A Kubernetes operator to produce egress gateway Envoy pods and control access to them with network policies",
    tag: "Networking",
    github: "monzo/egress-operator",
  },

  {
    title: "eksctl",
    link: "",
    description: "Home for Cluster API, a subproject of sig-cluster-lifecycle",
    tag: "Cluster Management",
    github: "weaveworks/eksctl",
  },

  // f

  {
    title: "flagger",
    link: "",
    description:
      "Progressive delivery Kubernetes operator (Canary, A/B Testing and Blue/Green deployments",
    tag: "Continuous Integration & Delivery",
    github: "weaveworks/flagger",
  },

  // g

  {
    title: "garden",
    link: "",
    description:
      "Garden provides production-like Kubernetes testing environments for integration tests, QA, and development.",
    tag: "Development Tools",
    github: "garden-io/garden",
  },

  {
    title: "gefyra",
    link: "",
    description:
      "Gefyra blazingly-fast, rock-solid, local application development ➡️ with Kubernetes.",
    tag: "Development Tools",
    github: "gefyrahq/gefyra",
  },

  // h

  {
    title: "harvester",
    link: "",
    description: "Open source hyperconverged infrastructure (HCI) software",
    tag: "Cluster Management",
    github: "harvester/harvester",
  },

  {
    title: "hierarchical-namespaces",
    link: "",
    description:
      "Hierarchical namespaces make it easier to share your cluster by making namespaces more powerful.",
    tag: "Cluster Management",
    github: "kubernetes-sigs/hierarchical-namespaces",
  },

  // i

  {
    title: "ingress-nginx",
    link: "",
    description:
      "ingress-nginx is an Ingress controller for Kubernetes using NGINX as a reverse proxy and load balancer.",
    tag: "Networking",
    github: "kubernetes/ingress-nginx",
  },

  // j

  {
    title: "jkube",
    link: "",
    description:
      "Tools and plugins for Java developers that help you create container images along with the required manifests to deploy your applications to Kubernetes.",
    tag: "Development Tools",
    github: "eclipse/jkube",
  },
  {
    title: "jenkins",
    link: "",
    description: "Jenkins automation server",
    tag: "Continuous Integration & Delivery",
    github: "jenkinsci/jenkins",
  },
  {
    title: "jenkins-x",
    link: "",
    description:
      "Jenkins X provides automated CI+CD for Kubernetes with Preview Environments on Pull Requests using Tekton, Knative, Lighthouse, Skaffold and Helm",
    tag: "Continuous Integration & Delivery",
    github: "jenkins-x/jx",
  },

  // k

  {
    title: "keda",
    link: "",
    description: "Event-driven Autoscaling in Kubernetes",
    tag: "Cluster Management",
    github: "kedacore/keda",
  },

  {
    title: "keptn",
    link: "",
    description:
      "Cloud-native application life-cycle orchestration. Keptn automates your SLO-driven multi-stage delivery and operations & remediation of your applications.",
    tag: "Continuous Integration & Delivery",
    github: "keptn/keptn",
  },

  {
    title: "kind",
    link: "",
    description: "Kubernetes IN Docker - local clusters for testing Kubernetes",
    tag: "Cluster Management",
    github: "kubernetes-sigs/kind",
  },

  {
    title: "keploy",
    link: "",
    description:
      "Testing for Developers. Toolkit that creates test-cases and data mocks from API calls, DB queries, etc.",
    tag: "Continuous Integration & Delivery",
    github: "keploy/keploy",
  },

  {
    title: "ksniff",
    link: "",
    description:
      "Kubectl plugin to ease sniffing on kubernetes pods using tcpdump and wireshark",
    tag: "Networking",
    github: "eldadru/ksniff",
  },

  {
    title: "kruise",
    link: "",
    description:
      "Kruise consists of several controllers which extend and complement the Kubernetes core controllers for workload management.",
    tag: "Cluster Management",
    github: "openkruise/kruise",
  },

  {
    title: "ko",
    link: "",
    description:
      "ko is a tool for building and deploying Golang applications to Kubernetes.",
    tag: "Development Tools",
    github: "ko-build/ko",
  },

  {
    title: "kubernetes-ingress-controller",
    link: "",
    description:
      "Configure plugins, health checking, load balancing and more in Kong for Kubernetes Services.",
    tag: "Networking",
    github: "Kong/kubernetes-ingress-controller",
  },

  {
    title: "konfig",
    link: "",
    description:
      "Konfig is a Kubernetes friendly Rails gem. It can load configuration and secrets from both YAML or folders with individual files and present them to your application the same way.",
    tag: "Development Tools",
    github: "cloud66-oss/konfig",
  },

  {
    title: "kOps",
    link: "",
    description:
      "Kubernetes Operations (kOps) - Production Grade k8s Installation, Upgrades and Management",
    tag: "Cluster Management",
    github: "kubernetes/kops",
  },

  {
    title: "kubedirector",
    link: "",
    description:
      "KubeDirector uses standard Kubernetes (K8s) facilities of custom resources and API extensions to implement stateful scaleout application clusters.",
    tag: "Cluster Management",
    github: "bluek8s/kubedirector",
  },

  {
    title: "kube-ovn",
    link: "",
    description:
      " A Kubernetes Network Fabric for Enterprises that is Rich in Functions and Easy in Operations.",
    tag: "Networking",
    github: "kubeovn/kube-ovn",
  },

  {
    title: "kubenav",
    link: "",
    description:
      "kubenav is the navigator for your Kubernetes clusters right in your pocket",
    tag: "Cluster Management",
    github: "kubenav/kubenav",
  },
  {
    title: "kubefwd",
    link: "",
    description:
      "Bulk port forwarding Kubernetes services for local development.",
    tag: "Networking",
    github: "txn2/kubefwd",
  },

  {
    title: "kubectl-warp",
    link: "",
    description:
      "Kubernetes CLI plugin for syncing and executing local files in Pod on Kubernetes",
    tag: "Development Tools",
    github: "ernoaapa/kubectl-warp",
  },

  {
    title: "kubernix",
    link: "",
    description:
      "This project aims to provide single dependency Kubernetes clusters for local testing, experimenting and development purposes.",
    tag: "Development Tools",
    github: "saschagrunert/kubernix",
  },

  {
    title: "kubesphere",
    link: "",
    description:
      "The container platform tailored for Kubernetes multi-cloud, datacenter, and edge management ",
    tag: "Cluster Management",
    github: "kubesphere/kubesphere",
  },

  {
    title: "kubespray",
    link: "",
    description: "Deploy a Production Ready Kubernetes Cluster ",
    tag: "Cluster Management",
    github: "kubernetes-sigs/kubespray",
  },

  {
    title: "kubicorn",
    link: "",
    description: "Simple, cloud native infrastructure for Kubernetes",
    tag: "Cluster Management",
    github: "kubicorn/kubicorn",
  },

  {
    title: "kubeone",
    link: "",
    description:
      "Kubermatic KubeOne automate cluster operations on all your cloud, on-prem, edge, and IoT environments",
    tag: "Cluster Management",
    github: "kubermatic/kubeone",
  },

  {
    title: "kubespray",
    link: "",
    description: "Deploy a Production Ready Kubernetes Cluster",
    tag: "Cluster Management",
    github: "kubernetes-sigs/kubespray",
  },

  {
    title: "kubevious",
    link: "",
    description:
      "Kubevious renders all configurations relevant to the application in one place. That saves a lot of time from operators, eliminating the need for looking up settings and digging within selectors and labels.",
    tag: "Development Tools",
    github: "kubevious/Kubevious",
  },

  {
    title: "kops",
    link: "",
    description:
      "Kubernetes Operations (kOps) - Production Grade k8s Installation, Upgrades and Management",
    tag: "Cluster Management",
    github: "kubernetes/kops",
  },

  {
    title: "k0s",
    link: "",
    description: "k0s - The Zero Friction Kubernetes",
    tag: "Cluster Management",
    github: "k0sproject/k0s",
  },

  {
    title: "k3d",
    link: "",
    description:
      "k3d,and Windows.,destroy,half the memory,highly available,is a tool for running local k3s clusters in docker. It's a single binary about 20 MB. You need to have docker installed.",
    tag: "Cluster Management",
    github: "k3d-io/k3d",
  },

  {
    title: "k3s",
    link: "",
    description:
      "Lightweight Kubernetes. Easy to install,Kubernetes clusters from the command line ",
    tag: "Cluster Management",
    github: "https://github.com/rancher/k3s",
  },

  // l

  {
    title: "liqo",
    link: "",
    description:
      "Liqo implements Dynamic resource sharing across different Kubernetes clusters (e.g.; offloading pods and services), supporting decentralized governance",
    tag: "Cluster Management",
    github: "liqotech/liqo",
  },

  // M

  {
    title: "matchbox",
    link: "",
    description:
      "Network boot and provision Fedora CoreOS and Flatcar Linux clusters",
    tag: "Cluster Management",
    github: "poseidon/matchbox",
  },

  {
    title: "monokle",
    link: "",
    description:
      "Monokle streamlines the process of creating, analyzing, and deploying Kubernetes configurations by providing a unified visual tool for authoring YAML manifests, validating policies, and managing live clusters.",
    tag: "Cluster Management",
    github: "kubeshop/monokle",
  },
  {
    title: "metalk8s",
    link: "",
    description:
      "An opinionated Kubernetes distribution with a focus on long-term on-prem deployments",
    tag: "Cluster Management",
    github: "scality/metalk8s",
  },

  {
    title: "microk8s",
    link: "",
    description:
      "MicroK8s is a small, fast, single-package Kubernetes for developers, IoT and edge",
    tag: "Cluster Management",
    github: "canonical/microk8s",
  },

  {
    title: "minikube",
    link: "",
    description:
      "minikube implements a local Kubernetes cluster on macOS,Linux,all in a binary less than 100 MB.",
    tag: "Cluster Management",
    github: "kubernetes/minikube",
  },

  //N

  // O

  {
    title: "okteto",
    link: "",
    description:
      "okteto accelerates the development workflow of Kubernetes applications.",
    tag: "Development Tools",
    github: "okteto/okteto",
  },

  // P

  // Q

  // R

  // S

  {
    title: "silver-surfer",
    link: "",
    description:
      "sealos is a Kubernetes distribution, a general-purpose cloud operating system for managing cloud-native applications. ",
    tag: "Cluster Management",
    github: "labring/sealos",
  },

  {
    title: "submariner",
    link: "",
    description:
      "Connect all your Kubernetes clusters, no matter where they are in the world.",
    tag: "Networking",
    github: "submariner-io/submariner",
  },

  {
    title: "skippbox",
    link: "",
    description: "A Desktop application for k8sd",
    tag: "Development Tools",
    github: "skippbox/skippbox",
  },
  {
    title: "spinnaker",
    link: "",
    description:
      "Spinnaker is an open source, multi-clouwith high velocity and confidence",
    tag: "Continuous Integration & Delivery",
    github: "spinnaker/spinnaker",
  },

  // T

  {
    title: "tekton",
    link: "",
    description:
      "A cloud native continuous integration and delivery (CI/CD) solution",
    tag: "Continuous Integration & Delivery",
    github: "tektoncd/pipeline",
  },

  {
    title: "tanka",
    link: "",
    description:
      "The clean, concise and super flexible alternative to YAML for your Kubernetes cluster.",
    tag: "Cluster Management",
    github: "grafana/tanka",
  },
  {
    title: "telepresence",
    link: "",
    description:
      "Telepresence provides fast, realistic local development for Kubernetes microservices.",
    tag: "Development Tools",
    github: "telepresenceio/telepresence",
  },

  {
    title: "tilt",
    link: "",
    description:
      "Tilt powers multi-service development and makes sure they behave.",
    tag: "Development Tools",
    github: "tilt-dev/tilt",
  },

  {
    title: "tye",
    link: "",
    description:
      "Tye is a developer tool that makes developing, testing, and deploying microservices and distributed applications easier.",
    tag: "Development Tools",
    github: "dotnet/tye",
  },

  {
    title: "typhoon",
    link: "",
    description: "Minimal and free Kubernetes distribution with Terraform ",
    tag: "Cluster Management",
    github: "poseidon/typhoon",
  },

  // U

  // V

  // W

  {
    title: "werf",
    link: "",
    description:
      "GitOps tool to deliver apps to Kubernetes and integrate this process with GitLab and other CI tools",
    tag: "Continuous Integration & Delivery",
    github: "werf/werf",
  },

  // X

  // Y

  // Z
];

export default entries;
