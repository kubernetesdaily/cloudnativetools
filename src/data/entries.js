/**
 * Kubetools collection structured as entries
 * 
 * Each entry has the following structure:
 * {
 *     title: string // display name
 *     link: string // the link for the website which contain learning resources
 *     description?: string // description that will be listed with your entry
 *     author?: string // your name/tag that will be listed
 *     github?: string // username on github that will display a link to your repo
 *     compatibleBrowsers?: array // browsers that this page is compatible with
 *     tag: string // category/tag of the tool
 * }
 */

export const entries = [
  // Cluster Management
  {
    title: "Monokle",
    link: "https://github.com/kubeshop/monokle",
    description: "Desktop unified visual tool for authoring, analysis and deployment of Kubernetes configurations",
    github: "kubeshop",
    tag: "Cluster Management"
  },
  {
    title: "kops",
    link: "https://github.com/kubernetes/kops",
    description: "Production Grade K8s Installation, Upgrades, and Management",
    github: "kubernetes",
    tag: "Cluster Management"
  },
  {
    title: "kind",
    link: "https://github.com/kubernetes-sigs/kind",
    description: "Kubernetes IN Docker - local clusters for testing Kubernetes",
    github: "kubernetes-sigs",
    tag: "Cluster Management"
  },
  {
    title: "Rancher",
    link: "https://github.com/rancher/rancher",
    description: "Complete container management platform",
    github: "rancher",
    tag: "Cluster Management"
  },
  {
    title: "K9s",
    link: "https://github.com/derailed/k9s",
    description: "Kubernetes CLI To Manage Your Clusters In Style!",
    github: "derailed",
    tag: "Cluster Management"
  },
  {
    title: "KubeArchInspect",
    link: "https://github.com/ArmDeveloperEcosystem/kubearchinspect",
    description: "Kubernetes architecture inspector tool",
    github: "ArmDeveloperEcosystem",
    tag: "Cluster Management"
  },
  
  // Pods Management
  {
    title: "kubetail",
    link: "https://github.com/johanhaleby/kubetail",
    description: "Bash script to tail Kubernetes logs from multiple pods at the same time",
    github: "johanhaleby",
    tag: "Pods Management"
  },
  {
    title: "kube-s3",
    link: "https://github.com/freegroup/kube-s3",
    description: "Kubernetes pods used shared S3 storage",
    github: "freegroup",
    tag: "Pods Management"
  },
  {
    title: "kubectl-ports-rs",
    link: "https://github.com/widnyana/kubectl-ports-rs",
    description: "A kubectl krew plugin to provide a list of exposed ports on kubernetes Pod resources",
    github: "widnyana",
    tag: "Pods Management"
  },
  
  // Debugging & Troubleshooting
  {
    title: "Kubeshark",
    link: "https://github.com/kubeshark/kubeshark",
    description: "TCPDump and Wireshark re-invented for Kubernetes",
    github: "kubeshark",
    tag: "Debugging & Troubleshooting"
  },
  {
    title: "Stern",
    link: "https://github.com/stern/stern",
    description: "Multi pod and container log tailing for Kubernetes",
    github: "stern",
    tag: "Debugging & Troubleshooting"
  },
  {
    title: "Kubectl-debug",
    link: "https://github.com/aylei/kubectl-debug",
    description: "Allows you to run a new container with troubleshooting tools installed in running pod for debugging purposes",
    github: "aylei",
    tag: "Debugging & Troubleshooting"
  },
  {
    title: "Inspektor Gadget",
    link: "https://github.com/inspektor-gadget/inspektor-gadget",
    description: "A collection of eBPF-based tools to debug and inspect Kubernetes resources and applications",
    github: "inspektor-gadget",
    tag: "Debugging & Troubleshooting"
  },
  
  // Artificial Intelligence
  {
    title: "K8sGPT",
    link: "https://github.com/k8sgpt-ai/k8sgpt",
    description: "Giving Kubernetes SRE superpowers to everyone",
    github: "k8sgpt-ai",
    tag: "Artificial Intelligence"
  },
  {
    title: "kubectl-ai",
    link: "https://github.com/sozercan/kubectl-ai",
    description: "Kubectl plugin for OpenAI GPT",
    github: "sozercan",
    tag: "Artificial Intelligence"
  },
  {
    title: "HolmesGPT",
    link: "https://github.com/robusta-dev/holmesgpt",
    description: "On-Call Assistant for Prometheus Alerts - Get a head start on fixing alerts with AI investigation",
    github: "robusta-dev",
    tag: "Artificial Intelligence"
  },
  
  // Security Tools
  {
    title: "Kubescape",
    link: "https://github.com/kubescape/kubescape",
    description: "Kubernetes security platform for configuration scanning, risk analysis, and runtime protection",
    github: "kubescape",
    tag: "Security Tools"
  },
  {
    title: "Kyverno",
    link: "https://github.com/nirmata/kyverno",
    description: "Kubernetes Native Policy Management",
    github: "nirmata",
    tag: "Security Tools"
  },
  {
    title: "kube-bench",
    link: "https://github.com/aquasecurity/kube-bench",
    description: "CIS Kubernetes Benchmark tool",
    github: "aquasecurity",
    tag: "Security Tools"
  },
  {
    title: "Kubestalk",
    link: "https://kubetools.io/kubestalk-uncovering-hidden-security-risks-in-your-kubernetes-clusters/",
    description: "Uncovering hidden security risks in Kubernetes clusters",
    tag: "Security Tools"
  },
  {
    title: "Trivy",
    link: "https://github.com/aquasecurity/trivy",
    description: "Find vulnerabilities, misconfigurations, secrets, SBOM in Kubernetes",
    github: "aquasecurity",
    tag: "Security Tools"
  },
  
  // Monitoring & Observability
  {
    title: "Prometheus",
    link: "https://github.com/prometheus/prometheus",
    description: "The Prometheus monitoring system and time series database",
    github: "prometheus",
    tag: "Monitoring & Observability"
  },
  {
    title: "Grafana",
    link: "https://github.com/grafana/grafana",
    description: "The tool for beautiful monitoring and metric analytics & dashboards for Graphite, InfluxDB & Prometheus & More",
    github: "grafana",
    tag: "Monitoring & Observability"
  },
  {
    title: "Node Problem Detector",
    link: "https://github.com/kubernetes/node-problem-detector",
    description: "This is a place for various problem detectors running on the Kubernetes nodes",
    github: "kubernetes",
    tag: "Monitoring & Observability"
  },
  {
    title: "Pixie",
    link: "https://github.com/pixie-io/pixie",
    description: "Instant Kubernetes-Native Application Observability",
    github: "pixie-io",
    tag: "Monitoring & Observability"
  },
  
  // Auto Scaling
  {
    title: "Karpenter",
    link: "https://github.com/aws/karpenter",
    description: "Kubernetes Node Autoscaler built for flexibility, performance, and simplicity",
    github: "aws",
    tag: "Auto Scaling"
  },
  {
    title: "KEDA",
    link: "https://keda.sh/",
    description: "Event-driven autoscaler for Kubernetes",
    github: "kedacore",
    tag: "Auto Scaling"
  },
  {
    title: "Kubernetes Autoscaler",
    link: "https://github.com/kubernetes/autoscaler",
    description: "Autoscaling components for Kubernetes",
    github: "kubernetes",
    tag: "Auto Scaling"
  },
  
  // Development Tools
  {
    title: "Tilt",
    link: "https://github.com/tilt-dev/tilt",
    description: "Define your dev environment as code. For microservice apps on Kubernetes",
    github: "tilt-dev",
    tag: "Development Tools"
  },
  {
    title: "DevSpace",
    link: "https://www.devspace.sh/",
    description: "An open-source developer tool for Kubernetes that lets you develop and deploy cloud-native software faster",
    github: "devspace-sh",
    tag: "Development Tools"
  },
  {
    title: "Skaffold",
    link: "https://github.com/GoogleContainerTools/skaffold",
    description: "Easy and Repeatable Kubernetes Development",
    github: "GoogleContainerTools",
    tag: "Development Tools"
  },
  {
    title: "Okteto",
    link: "https://github.com/okteto/okteto",
    description: "Build better applications by developing and testing your code directly in Kubernetes",
    github: "okteto",
    tag: "Development Tools"
  },
  {
    title: "Telepresence",
    link: "https://www.telepresence.io/",
    description: "Fast, local development for Kubernetes and Openshift microservices",
    tag: "Development Tools"
  },
  
  // CI/CD Tools
  {
    title: "ArgoCD",
    link: "https://github.com/argoproj/argo-cd",
    description: "Declarative continuous deployment for Kubernetes",
    github: "argoproj",
    tag: "CI/CD Tools"
  },
  {
    title: "Flux",
    link: "https://github.com/fluxcd/flux",
    description: "GitOps Kubernetes operator",
    github: "fluxcd",
    tag: "CI/CD Tools"
  },
  {
    title: "Tekton",
    link: "https://github.com/tektoncd/pipeline",
    description: "A cloud native continuous integration and delivery (CI/CD) solution",
    github: "tektoncd",
    tag: "CI/CD Tools"
  },
  {
    title: "Jenkins X",
    link: "https://github.com/jenkins-x/jx",
    description: "Jenkins X provides automated CI+CD for Kubernetes with Preview Environments on Pull Requests using Tekton, Knative, Lighthouse, Skaffold and Helm",
    github: "jenkins-x",
    tag: "CI/CD Tools"
  },
  
  // Network & Service Mesh
  {
    title: "Cilium",
    link: "https://github.com/cilium/cilium",
    description: "eBPF-based Networking, Security, and Observability",
    github: "cilium",
    tag: "Network & Service Mesh"
  },
  {
    title: "Istio",
    link: "https://github.com/istio/istio",
    description: "Connect, secure, control, and observe services",
    github: "istio",
    tag: "Network & Service Mesh"
  },
  {
    title: "K8s-insider",
    link: "https://github.com/TrueGoric/k8s-insider",
    description: "A zero-config way to access you kubernetes cluster network",
    github: "TrueGoric",
    tag: "Network & Service Mesh"
  },
  {
    title: "MetalLB",
    link: "https://github.com/metallb/metallb",
    description: "Load-balancer implementation for bare metal Kubernetes clusters, using standard routing protocols",
    github: "metallb",
    tag: "Network & Service Mesh"
  },
  
  // Storage
  {
    title: "Longhorn",
    link: "https://github.com/longhorn/longhorn",
    description: "Cloud-Native distributed block storage built on and for Kubernetes",
    github: "longhorn",
    tag: "Storage"
  },
  {
    title: "OpenEBS",
    link: "https://github.com/openebs/openebs",
    description: "Kubernetes native - hyperconverged block storage with multiple storage engines",
    github: "openebs",
    tag: "Storage"
  },
  {
    title: "Rook",
    link: "https://github.com/rook/rook",
    description: "Storage Orchestration for Kubernetes",
    github: "rook",
    tag: "Storage"
  },
  
  // Cost Optimization
  {
    title: "Kubecost",
    link: "https://github.com/kubecost/cost-model",
    description: "Cross-cloud cost allocation models for workloads running on Kubernetes",
    github: "kubecost",
    tag: "Cost Optimization"
  },
  {
    title: "OpenCost",
    link: "https://github.com/opencost/opencost",
    description: "OpenCost — your favorite open source cost monitoring tool for Kubernetes",
    github: "opencost",
    tag: "Cost Optimization"
  },
  {
    title: "kube-green",
    link: "https://github.com/kube-green/kube-green",
    description: "A simple k8s addon that automatically shuts down resources when you don't need them",
    github: "kube-green",
    tag: "Cost Optimization"
  },
  
  // Machine Learning
  {
    title: "Kuberay",
    link: "https://github.com/ray-project/kuberay",
    description: "Deploying Ray on Kubernetes",
    github: "ray-project",
    tag: "Machine Learning"
  },
  {
    title: "Kubeflow",
    link: "https://github.com/kubeflow/kubeflow",
    description: "Machine Learning Toolkit for Kubernetes",
    github: "kubeflow",
    tag: "Machine Learning"
  },
  {
    title: "Kserve",
    link: "https://github.com/kserve/kserve",
    description: "Standardized Serverless ML Inference Platform on Kubernetes",
    github: "kserve",
    tag: "Machine Learning"
  },
  
  // Serverless/FaaS
  {
    title: "Knative",
    link: "https://github.com/knative/serving",
    description: "Kubernetes-based, scale-to-zero, request-driven compute",
    github: "knative",
    tag: "Serverless/FaaS"
  },
  {
    title: "OpenFaaS",
    link: "https://github.com/openfaas/faas",
    description: "OpenFaaS - Serverless Functions Made Simple",
    github: "openfaas",
    tag: "Serverless/FaaS"
  },
  // Pods Management
  {
    title: "kubetail",
    link: "https://github.com/johanhaleby/kubetail",
    description: "Bash script to tail Kubernetes logs from multiple pods at the same time",
    github: "johanhaleby",
    tag: "Pods Management"
  },
  {
    title: "kube-s3",
    link: "https://github.com/freegroup/kube-s3",
    description: "Kubernetes pods used shared S3 storage",
    github: "freegroup",
    tag: "Pods Management"
  },
  {
    title: "kubectl-ports-rs",
    link: "https://github.com/widnyana/kubectl-ports-rs",
    description: "A kubectl krew plugin to provide a list of exposed ports on kubernetes Pod resources",
    github: "widnyana",
    tag: "Pods Management"
  },
  
  // Cluster Management
  {
    title: "Monokle",
    link: "https://github.com/kubeshop/monokle",
    description: "Desktop unified visual tool for authoring, analysis and deployment of Kubernetes configurations",
    github: "kubeshop",
    tag: "Cluster Management"
  },
  {
    title: "kops",
    link: "https://github.com/kubernetes/kops",
    description: "Production Grade K8s Installation, Upgrades, and Management",
    github: "kubernetes",
    tag: "Cluster Management"
  },
  {
    title: "silver-surfer",
    link: "https://github.com/devtron-labs/silver-surfer",
    description: "Check ApiVersion compatibility and provide Migration path for Kubernetes objects when upgrading Kubernetes to latest versions",
    github: "devtron-labs",
    tag: "Cluster Management"
  },
  {
    title: "Kube-ops-view",
    link: "https://github.com/hjacobs/kube-ops-view",
    description: "Kubernetes Operational View - read-only system dashboard for multiple K8s clusters",
    github: "hjacobs",
    tag: "Cluster Management"
  },
  {
    title: "kubeprompt",
    link: "https://github.com/jlesquembre/kubeprompt",
    description: "Kubernetes prompt info",
    github: "jlesquembre",
    tag: "Cluster Management"
  },
  {
    title: "Metalk8s",
    link: "https://github.com/scality/metalk8s",
    description: "An opinionated Kubernetes distribution with a focus on long-term on-prem deployments",
    github: "scality",
    tag: "Cluster Management"
  },
  {
    title: "kind",
    link: "https://github.com/kubernetes-sigs/kind",
    description: "Kubernetes IN Docker - local clusters for testing Kubernetes",
    github: "kubernetes-sigs",
    tag: "Cluster Management"
  },
  {
    title: "Clusterman",
    link: "https://github.com/Yelp/clusterman",
    description: "Cluster Autoscaler for Kubernetes and Mesos",
    github: "Yelp",
    tag: "Cluster Management"
  },
  {
    title: "Cert-manager",
    link: "https://github.com/jetstack/cert-manager",
    description: "Automatically provision and manage TLS certificates",
    github: "jetstack",
    tag: "Cluster Management"
  },
  {
    title: "Goldilocks",
    link: "https://github.com/FairwindsOps/goldilocks",
    description: "Get your resource requests 'Just Right'",
    github: "FairwindsOps",
    tag: "Cluster Management"
  },
  {
    title: "katafygio",
    link: "https://github.com/bpineau/katafygio",
    description: "Dump, or continuously backup Kubernetes objets as yaml files in git",
    github: "bpineau",
    tag: "Cluster Management"
  },
  {
    title: "Rancher",
    link: "https://github.com/rancher/rancher",
    description: "Complete container management platform",
    github: "rancher",
    tag: "Cluster Management"
  },
  {
    title: "Sealed Secrets",
    link: "https://github.com/bitnami-labs/sealed-secrets",
    description: "A Kubernetes controller and tool for one-way encrypted Secrets",
    github: "bitnami-labs",
    tag: "Cluster Management"
  },
  {
    title: "OpenKruise/Kruise",
    link: "https://github.com/openkruise/kruise",
    description: "Automate application workloads management on Kubernetes",
    github: "openkruise",
    tag: "Cluster Management"
  },
  {
    title: "kubectl snapshot",
    link: "https://github.com/fbrubbo/kubectl-snapshot",
    description: "Take Cluster Snapshots",
    github: "fbrubbo",
    tag: "Cluster Management"
  },
  {
    title: "kapp",
    link: "https://github.com/k14s/kapp",
    description: "Simple deployment tool focused on the concept of Kubernetes application — a set of resources with the same label",
    github: "k14s",
    tag: "Cluster Management"
  },
  {
    title: "KEDA",
    link: "https://keda.sh/",
    description: "Event-driven autoscaler for Kubernetes",
    github: "kedacore",
    tag: "Auto Scaling"
  },
  {
    title: "Octant",
    link: "https://github.com/vmware-tanzu/octant",
    description: "To better understand the complexity of Kubernetes clusters",
    github: "vmware-tanzu",
    tag: "Cluster Management"
  },
  {
    title: "Portainer",
    link: "https://github.com/portainer/k8s",
    description: "Portainer inside a Kubernetes environment",
    github: "portainer",
    tag: "Cluster Management"
  },
  {
    title: "Gardener",
    link: "https://gardener.cloud/",
    description: "Deliver fully-managed clusters at scale everywhere with your own Kubernetes-as-a-Service",
    tag: "Cluster Management"
  },
  {
    title: "xlskubectl",
    link: "https://github.com/learnk8s/xlskubectl",
    description: "A spreadsheet to control your Kubernetes cluster",
    github: "learnk8s",
    tag: "Cluster Management"
  },
  {
    title: "Kubefirst",
    link: "https://github.com/kubefirst/kubefirst",
    description: "Fully-automated OSS delivery & infrastructure management gitops platforms",
    github: "kubefirst",
    tag: "Cluster Management"
  },
  {
    title: "Kamaji",
    link: "https://github.com/clastix/kamaji",
    description: "Build and operate Kubernetes at scale with a fraction of operational burden",
    github: "clastix",
    tag: "Cluster Management"
  },
  {
    title: "kustomizer",
    link: "https://github.com/stefanprodan/kustomizer",
    description: "An experimental package manager for distributing Kubernetes configuration as OCI artifacts",
    github: "stefanprodan",
    tag: "Cluster Management"
  },
  {
    title: "Kudo",
    link: "https://github.com/kudobuilder/kudo",
    description: "Declarative approach to building production-grade Kubernetes Operators",
    github: "kudobuilder",
    tag: "Cluster Management"
  },
  {
    title: "node-problem-detector",
    link: "https://github.com/kubernetes/node-problem-detector",
    description: "This is a place for various problem detectors running on the Kubernetes nodes",
    github: "kubernetes",
    tag: "Monitoring & Observability"
  },
  {
    title: "k0s",
    link: "https://github.com/k0sproject/k0s",
    description: "All-inclusive Kubernetes distribution, configured with all features needed to build a cluster and packaged as a single binary",
    github: "k0sproject",
    tag: "Cluster Management"
  },
  {
    title: "k0smotron",
    link: "https://github.com/k0sproject/k0smotron",
    description: "Deploy and run Kubernetes control planes powered by k0s on any existing cluster",
    github: "k0sproject",
    tag: "Cluster Management"
  },
  {
    title: "ClusterPedia",
    link: "https://github.com/clusterpedia-io/clusterpedia",
    description: "The Encyclopedia of Kubernetes clusters",
    github: "clusterpedia-io",
    tag: "Cluster Management"
  },
  {
    title: "kubean",
    link: "https://github.com/kubean-io/kubean",
    description: "Kubernetes lifecycle management operator based on kubespray",
    github: "kubean-io",
    tag: "Cluster Management"
  },
  {
    title: "punq",
    link: "https://github.com/mogenius/punq",
    description: "Self-hosted Kubernetes workload manager with team collaboration",
    github: "mogenius",
    tag: "Cluster Management"
  },
  {
    title: "Claudie",
    link: "https://github.com/berops/claudie",
    description: "Deploy and operate Kubernetes clusters with each nodepool in a different provider or on-prem",
    github: "berops",
    tag: "Cluster Management"
  },
  {
    title: "Kubemarine",
    link: "https://github.com/Netcracker/KubeMarine",
    description: "Management tool for Kubernetes cluster deployment and maintenance",
    github: "Netcracker",
    tag: "Cluster Management"
  },
  {
    title: "k8s-duplicator",
    link: "https://github.com/Nick-Triller/k8s-duplicator",
    description: "Kubernetes controller that copies secrets into other namespaces",
    github: "Nick-Triller",
    tag: "Cluster Management"
  },
  {
    title: "KubeStellar",
    link: "https://github.com/kubestellar/kubestellar",
    description: "A flexible solution for challenges associated with multi-cluster configuration management for edge, multi-cloud, and hybrid cloud",
    github: "kubestellar",
    tag: "Cluster Management"
  },
  {
    title: "Trolley",
    link: "https://github.com/Trolley-MGMT/trolleymgmt",
    description: "Trolley is a multi cloud Kubernetes management system",
    github: "Trolley-MGMT",
    tag: "Cluster Management"
  },
  {
    title: "Cyclops",
    link: "https://github.com/cyclops-ui/cyclops",
    description: "A powerful user interface for managing and interacting with Kubernetes clusters",
    github: "cyclops-ui",
    tag: "Cluster Management"
  },
  {
    title: "Liqo",
    link: "https://github.com/liqotech/liqo",
    description: "An open-source project that enables dynamic and seamless Kubernetes multi-cluster topologies",
    github: "liqotech",
    tag: "Cluster Management"
  },
  {
    title: "Guard",
    link: "https://github.com/kubeguard/guard",
    description: "Kubernetes Authentication & Authorization WebHook Server",
    github: "kubeguard",
    tag: "Security Tools"
  },
  {
    title: "Meshery",
    link: "https://github.com/meshery/meshery",
    description: "Meshery is a Multi-cluster management tool for Kubernetes and Clouds",
    github: "meshery",
    tag: "Cluster Management"
  },
  {
    title: "cluster-template",
    link: "https://github.com/onedr0p/cluster-template",
    description: "A template for deploying a Kubernetes cluster with k3s or Talos",
    github: "onedr0p",
    tag: "Cluster Management"
  },
  {
    title: "vCluster",
    link: "https://github.com/loft-sh/vcluster",
    description: "Create fully functional virtual Kubernetes clusters inside namespaces of underlying clusters",
    github: "loft-sh",
    tag: "Cluster Management"
  },
  {
    title: "KindScaler",
    link: "https://github.com/lobuhi/kindscaler",
    description: "Node Management for KinD Clusters. Modify the KinD cluster configuration by adding or removing nodes",
    github: "lobuhi",
    tag: "Cluster Management"
  },
  {
    title: "buoy",
    link: "https://github.com/everettraven/buoy",
    description: "A declarative Kubernetes dashboard in your terminal",
    github: "everettraven",
    tag: "Cluster Management"
  },
  {
    title: "Glasskube",
    link: "https://github.com/glasskube/glasskube",
    description: "Kubernetes package manager that lets you install apps via an easy-to-use web interface or CLI",
    github: "glasskube",
    tag: "Cluster Management"
  },
  {
    title: "Karmada",
    link: "https://github.com/karmada-io/karmada",
    description: "Open, Multi-Cloud, Multi-Cluster Kubernetes Orchestration",
    github: "karmada-io",
    tag: "Cluster Management"
  },
  {
    title: "Kubeadmiral",
    link: "https://github.com/kubewharf/kubeadmiral",
    description: "Multi-Cluster Kubernetes Orchestration",
    github: "kubewharf",
    tag: "Cluster Management"
  },
  {
    title: "RBAC Wizard",
    link: "https://github.com/pehlicd/rbac-wizard",
    description: "Helps to visualize and analyze the RBAC configurations of the Kubernetes cluster",
    github: "pehlicd",
    tag: "Security Tools"
  },
  {
    title: "Kondense",
    link: "https://github.com/unagex/kondense",
    description: "Tool designed for Kubernetes environments, focused on optimizing memory and CPU usage in containers",
    github: "unagex",
    tag: "Cluster Management"
  },
  {
    title: "Kubeseal-Webgui",
    link: "https://github.com/Jaydee94/kubeseal-webgui",
    description: "Simple web UI for Bitnami Sealed Secrets",
    github: "Jaydee94",
    tag: "Cluster Management"
  },
  {
    title: "Klutch",
    link: "https://github.com/anynines/klutchio",
    description: "Klutch extends Crossplane to manage resources across multiple Kubernetes clusters",
    github: "anynines",
    tag: "Cluster Management"
  },
  {
    title: "Kanvas",
    link: "https://kanvas.new",
    description: "A comprehensive suite of collaborative tools for designing, deploying and managing cloud-native infrastructure",
    github: "meshery",
    tag: "Cluster Management"
  },

  // Cluster with Core CLI Tools
  {
    title: "Bootkube",
    link: "https://github.com/kubernetes-sigs/bootkube",
    description: "Launch a self-hosted Kubernetes cluster",
    github: "kubernetes-sigs",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kubectx + kubens",
    link: "https://github.com/ahmetb/kubectx",
    description: "Switch faster between clusters and namespaces in kubectl",
    github: "ahmetb",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kube-shell",
    link: "https://github.com/cloudnativelabs/kube-shell",
    description: "Kubernetes shell: An integrated shell for working with Kubernetes",
    github: "cloudnativelabs",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kuttle",
    link: "https://github.com/kayrus/kuttle",
    description: "Kubernetes wrapper for sshuttle without SSH",
    github: "kayrus",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kubectl sudo",
    link: "https://github.com/postfinance/kubectl-sudo",
    description: "Run kubernetes commands with the security privileges of another user",
    github: "postfinance",
    tag: "Cluster CLI Tools"
  },
  {
    title: "K9s",
    link: "https://github.com/derailed/k9s",
    description: "Kubernetes CLI To Manage Your Clusters In Style!",
    github: "derailed",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Ktunnel",
    link: "https://github.com/omrikiei/ktunnel",
    description: "A cli that exposes your local resources to kubernetes",
    github: "omrikiei",
    tag: "Cluster CLI Tools"
  },
  {
    title: "KubeOperator",
    link: "https://github.com/KubeOperator/webkubectl",
    description: "Run kubectl command in Web Browser",
    github: "KubeOperator",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Vimkubectl",
    link: "https://github.com/rottencandy/vimkubectl",
    description: "Manage any Kubernetes resource from Vim",
    github: "rottencandy",
    tag: "Cluster CLI Tools"
  },
  {
    title: "KubeHelper",
    link: "https://github.com/KubeHelper/kubehelper",
    description: "Simplifies many daily Kubernetes cluster tasks through a web interface",
    github: "KubeHelper",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kubecolor",
    link: "https://github.com/hidetatz/kubecolor",
    description: "Colorizes kubectl output",
    github: "hidetatz",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Krew",
    link: "https://github.com/kubernetes-sigs/krew",
    description: "Krew is the package manager for kubectl plugins",
    github: "kubernetes-sigs",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Kueue",
    link: "https://github.com/kubernetes-sigs/kueue",
    description: "Kueue is a set of APIs and controller for job queueing",
    github: "kubernetes-sigs",
    tag: "Cluster CLI Tools"
  },
  {
    title: "fubectl",
    link: "https://github.com/kubermatic/fubectl",
    description: "Reduces repetitive interactions with kubectl",
    github: "kubermatic",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kube-ps1",
    link: "https://github.com/jonmosco/kube-ps1",
    description: "Kubernetes prompt for bash and zsh",
    github: "jonmosco",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Conftest",
    link: "https://github.com/open-policy-agent/conftest",
    description: "Write tests against structured configuration data using the Open Policy Agent Rego query language",
    github: "open-policy-agent",
    tag: "Testing Tools"
  },
  {
    title: "Kube-capacity",
    link: "https://github.com/robscott/kube-capacity",
    description: "A CLI that provides an overview of the resource requests, limits, and utilization in a k8s cluster",
    github: "robscott",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Karpenter",
    link: "https://github.com/aws/karpenter",
    description: "Kubernetes Node Autoscaler built for flexibility, performance, and simplicity",
    github: "aws",
    tag: "Auto Scaling"
  },
  {
    title: "Kubernetes Autoscaler",
    link: "https://github.com/kubernetes/autoscaler",
    description: "Autoscaling components for Kubernetes",
    github: "kubernetes",
    tag: "Auto Scaling"
  },
  {
    title: "Kured",
    link: "https://github.com/kubereboot/kured",
    description: "Kubernetes Reboot Daemon",
    github: "kubereboot",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Kube-prompt",
    link: "https://github.com/c-bata/kube-prompt",
    description: "An interactive kubernetes client featuring auto-complete",
    github: "c-bata",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Click",
    link: "https://github.com/databricks/click",
    description: "Command Line Interactive Controller for Kubernetes",
    github: "databricks",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Kubie",
    link: "https://github.com/sbstp/kubie",
    description: "A more powerful alternative to kubectx and kubens",
    github: "sbstp",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Pluto",
    link: "https://github.com/FairwindsOps/pluto",
    description: "A cli tool to help discover deprecated apiVersions in Kubernetes",
    github: "FairwindsOps",
    tag: "Cluster CLI Tools"
  },
  {
    title: "ksync",
    link: "https://github.com/ksync/ksync",
    description: "Sync files between your local system and a kubernetes cluster",
    github: "ksync",
    tag: "Development Tools"
  },
  {
    title: "fleet",
    link: "https://github.com/rancher/fleet",
    description: "Manage large fleets of Kubernetes clusters",
    github: "rancher",
    tag: "Cluster Management"
  },
  {
    title: "stash",
    link: "https://github.com/stashed/stash",
    description: "Backup your Kubernetes Stateful Applications",
    github: "stashed",
    tag: "Backup Tools"
  },
  {
    title: "Finch",
    link: "https://github.com/runfinch/finch",
    description: "The Finch CLI an open source client for container development",
    github: "runfinch",
    tag: "Development Tools"
  },
  {
    title: "KubeView",
    link: "https://github.com/benc-uk/kubeview",
    description: "Kubernetes cluster visualiser and graphical explorer",
    github: "benc-uk",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Descheduler",
    link: "https://github.com/kubernetes-sigs/descheduler",
    description: "Descheduler for Kubernetes",
    github: "kubernetes-sigs",
    tag: "Cluster CLI Tools"
  },
  {
    title: "cloudtty",
    link: "https://github.com/cloudtty/cloudtty",
    description: "A Friendly Kubernetes CloudShell (Web Terminal)",
    github: "cloudtty",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kor",
    link: "https://github.com/yonahd/kor",
    description: "A Tool to discover unused Kubernetes Resources",
    github: "yonahd",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Kubernetes Image Puller",
    link: "https://github.com/che-incubator/kubernetes-image-puller",
    description: "Caching images on a cluster by creating a DaemonSet downloading and running container images on each node",
    github: "che-incubator",
    tag: "Caching"
  },
  {
    title: "image-builder",
    link: "https://github.com/kubernetes-sigs/image-builder",
    description: "A tool for building Kubernetes virtual machine images across multiple infrastructure providers",
    github: "kubernetes-sigs",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Kubed",
    link: "https://github.com/eshelyaron/kubed",
    description: "Interactive interface within Emacs to work with Kubernetes clusters with the full power of kubectl",
    github: "eshelyaron",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Duplik8s",
    link: "https://github.com/Telemaco019/duplik8s",
    description: "A kubectl plugin to duplicate resources in a Kubernetes cluster",
    github: "Telemaco019",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kl",
    link: "https://github.com/robinovitch61/kl",
    description: "Interactive, multi container and cluster terminal app for logs",
    github: "robinovitch61",
    tag: "Logging and Tracing"
  },
  {
    title: "kubectl foreach",
    link: "https://github.com/ahmetb/kubectl-foreach",
    description: "Run kubectl commands in all/some contexts in parallel (similar to GNU xargs+parallel)",
    github: "ahmetb",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kubecui",
    link: "https://github.com/pymag09/kubecui",
    description: "kubeui makes kubectl more user friendly",
    github: "pymag09",
    tag: "Cluster CLI Tools"
  },
  {
    title: "q-as-kubectl",
    link: "https://github.com/ildar-shaimordanov/q-as-kubectl",
    description: "q as kubectl: yet another way to control k8s commands",
    github: "ildar-shaimordanov",
    tag: "Cluster CLI Tools"
  },
  
  // Alert and Monitoring
  {
    title: "Thanos",
    link: "https://github.com/thanos-io/thanos",
    description: "Highly available Prometheus setup with long term storage capabilities",
    github: "thanos-io",
    tag: "Alert and Monitoring"
  },
  {
    title: "Prometheus",
    link: "https://github.com/prometheus/prometheus",
    description: "The Prometheus monitoring system and time series database",
    github: "prometheus",
    tag: "Alert and Monitoring"
  },
  {
    title: "Grafana",
    link: "https://github.com/grafana/grafana",
    description: "The tool for beautiful monitoring and metric analytics & dashboards for Graphite, InfluxDB & Prometheus & More",
    github: "grafana",
    tag: "Alert and Monitoring"
  },
  {
    title: "Searchlight",
    link: "https://github.com/searchlight/searchlight",
    description: "Alerts for Kubernetes",
    github: "searchlight",
    tag: "Alert and Monitoring"
  },
  {
    title: "linkerd2 Monitoring Mixin for Grafana",
    link: "https://github.com/andrew-waters/linkerd2-mixin",
    description: "Grafana dashboards for linkerd2 monitoring and can work in standalone (default) or in multi cluster setup",
    github: "andrew-waters",
    tag: "Alert and Monitoring"
  },
  {
    title: "kuberhaus",
    link: "https://github.com/stevelacy/kuberhaus",
    description: "Kubernetes resource dashboard with node/pod layout and resource requests",
    github: "stevelacy",
    tag: "Alert and Monitoring"
  },
  {
    title: "Kubernetes Job/CronJob Notifier",
    link: "https://github.com/sukeesh/k8s-job-notify",
    description: "This tool sends an alert to slack whenever there is a Kubernetes cronJob/Job failure/success",
    github: "sukeesh",
    tag: "Alert and Monitoring"
  },
  {
    title: "Argus",
    link: "https://clustergarage.io/argus/docs/overview",
    description: "This tool monitors changes in the filesystem on specified paths",
    tag: "Alert and Monitoring"
  },
  {
    title: "Kube-Scout",
    link: "https://github.com/ReallyLiri/kubescout",
    description: "Scout for alarming issues across your Kubernetes clusters",
    github: "ReallyLiri",
    tag: "Alert and Monitoring"
  },
  {
    title: "Kwatch",
    link: "https://github.com/abahmed/kwatch",
    description: "Monitor & detect crashes in your Kubernetes(K8s) cluster instantly",
    github: "abahmed",
    tag: "Alert and Monitoring"
  },
  {
    title: "Scope",
    link: "https://github.com/weaveworks/scope",
    description: "Monitoring, visualisation & management for Docker & Kubernetes",
    github: "weaveworks",
    tag: "Alert and Monitoring"
  },
  {
    title: "Kubeshark",
    link: "https://github.com/kubeshark/kubeshark",
    description: "TCPDump and Wireshark re-invented for Kubernetes",
    github: "kubeshark",
    tag: "Alert and Monitoring"
  },
  {
    title: "Ksniff",
    link: "https://github.com/eldadru/ksniff",
    description: "Kubectl plugin to ease sniffing on kubernetes pods using tcpdump and wireshark",
    github: "eldadru",
    tag: "Alert and Monitoring"
  },{
    title: "kubetail",
    link: "https://github.com/johanhaleby/kubetail",
    description: "Bash script to tail Kubernetes logs from multiple pods at the same time",
    github: "johanhaleby",
    tag: "Pods Management"
  },
  {
    title: "k'exp",
    link: "https://github.com/iximiuz/kexp",
    description: "Understand Kubernetes - the visual way. Not another attempt to manage production clusters in the browser",
    github: "iximiuz",
    tag: "Development Tools"
  },
  {
    title: "k8s-insider",
    link: "https://github.com/TrueGoric/k8s-insider",
    description: "A zero-config way to access your kubernetes cluster network",
    github: "TrueGoric",
    tag: "Network & Service Mesh"
  },
  {
    title: "kronic",
    link: "https://github.com/mshade/kronic",
    description: "The simple Kubernetes CronJob Admin UI",
    github: "mshade",
    tag: "Development Tools"
  },
  {
    title: "Docketeer",
    link: "https://github.com/open-source-labs/Docketeer",
    description: "Developer-friendly application that provides a single interface for container and network management",
    github: "open-source-labs",
    tag: "Development Tools"
  },
  {
    title: "Helmify",
    link: "https://github.com/arttor/helmify",
    description: "Creates Helm chart from Kubernetes yaml",
    github: "arttor",
    tag: "Development Tools"
  },
  {
    title: "Reckoner",
    link: "https://github.com/FairwindsOps/reckoner",
    description: "Declaratively install and manage multiple Helm chart releases",
    github: "FairwindsOps",
    tag: "Development Tools"
  },
  {
    title: "Katenary",
    link: "https://github.com/metal3d/katenary",
    description: "Convert docker-compose to a configurable helm chart",
    github: "metal3d",
    tag: "Development Tools"
  },
  {
    title: "kubernetes-replicator",
    link: "https://github.com/mittwald/kubernetes-replicator",
    description: "Kubernetes controller for synchronizing secrets & config maps across namespaces",
    github: "mittwald",
    tag: "Development Tools"
  },
  {
    title: "node-gizmo",
    link: "https://github.com/Kavinraja-G/node-gizmo",
    description: "A CLI utility for your Kubernetes nodes",
    github: "Kavinraja-G",
    tag: "Development Tools"
  },
  {
    title: "KubeBlocks",
    link: "https://github.com/apecloud/kubeblocks",
    description: "Open-source control plane that runs and manages databases, message queues and other data infrastructure on K8s",
    github: "apecloud",
    tag: "Development Tools"
  },
  {
    title: "Kubectl-fields",
    link: "https://github.com/rewanthtammana/kubectl-fields",
    description: "A Kubernetes resources hierarchy parsing tool",
    github: "rewanthtammana",
    tag: "Development Tools"
  },
  {
    title: "sleepcycles",
    link: "https://github.com/rekuberate-io/sleepcycles",
    description: "Define sleep & wake up cycles for your Kubernetes resources",
    github: "rekuberate-io",
    tag: "Development Tools"
  },
  {
    title: "scaf",
    link: "https://github.com/sixfeetup/scaf",
    description: "Provides developers and DevOps engineers with a complete blueprint for a new project using Kubernetes",
    github: "sixfeetup",
    tag: "Development Tools"
  },
  {
    title: "KubePug",
    link: "https://github.com/kubepug/kubepug",
    description: "Deprecations AKA KubePug - Pre UpGrade (Checker)",
    github: "kubepug",
    tag: "Development Tools"
  },
  {
    title: "mogenius",
    link: "https://mogenius.com",
    description: "A self-service platform that enables developers to deploy and manage applications on Kubernetes with ease",
    tag: "Development Tools"
  },
  {
    title: "Armada",
    link: "https://github.com/armadaproject/armada",
    description: "A multi-cluster batch queuing system for high-throughput workloads on Kubernetes",
    github: "armadaproject",
    tag: "Development Tools"
  },
  {
    title: "kro",
    link: "https://github.com/awslabs/kro",
    description: "Kube Resource Orchestrator provides a powerful abstraction layer that allows you to define complex multi-resource constructs",
    github: "awslabs",
    tag: "Development Tools"
  },
  {
    title: "kubectl-slice",
    link: "https://github.com/patrickdappollonio/kubectl-slice",
    description: "Split multiple Kubernetes files into smaller files with ease",
    github: "patrickdappollonio",
    tag: "Development Tools"
  },
  {
    title: "crik",
    link: "https://github.com/qawolf/crik",
    description: "Project that aims to provide checkpoint and restore functionality for Kubernetes pods",
    github: "qawolf",
    tag: "Development Tools"
  },
  {
    title: "kbld",
    link: "https://github.com/carvel-dev/kbld",
    description: "Seamlessly incorporates image building and image pushing into your development and deployment workflows",
    github: "carvel-dev",
    tag: "Development Tools"
  },
  {
    title: "Helm Kanvas Snapshot",
    link: "https://github.com/meshery/helm-kanvas-snapshot",
    description: "Plugin that generates a visual snapshot of Helm charts",
    github: "meshery",
    tag: "Development Tools"
  },
  {
    title: "KubeDiagrams",
    link: "https://github.com/philippemerle/KubeDiagrams",
    description: "Generate Kubernetes architecture diagrams from manifest files, kustomization files, Helm charts, and actual cluster state",
    github: "philippemerle",
    tag: "Development Tools"
  },
  
  // Alternative Tools for Development
  {
    title: "Minikube",
    link: "https://github.com/kubernetes/minikube",
    description: "Minikube implements a local Kubernetes cluster",
    github: "kubernetes",
    tag: "Alternative Tools for Development"
  },
  {
    title: "Okteto",
    link: "https://github.com/okteto/okteto",
    description: "Build better applications by developing and testing your code directly in Kubernetes",
    github: "okteto",
    tag: "Development Tools"
  },
  {
    title: "Tilt",
    link: "https://github.com/tilt-dev/tilt",
    description: "Local Kubernetes development with no stress",
    github: "tilt-dev",
    tag: "Development Tools"
  },
  {
    title: "Garden",
    link: "https://github.com/garden-io/garden",
    description: "Development orchestrator for Kubernetes, containers and functions",
    github: "garden-io",
    tag: "Development Tools"
  },
  {
    title: "KuberNix",
    link: "https://github.com/saschagrunert/kubernix",
    description: "Single dependency Kubernetes clusters for local testing, experimenting and development",
    github: "saschagrunert",
    tag: "Development Tools"
  },
  {
    title: "Copper",
    link: "https://github.com/cloud66-oss/copper",
    description: "A configuration file validator for Kubernetes",
    github: "cloud66-oss",
    tag: "Development Tools"
  },
  {
    title: "ko",
    link: "https://github.com/google/ko",
    description: "Build and deploy Go applications on Kubernetes",
    github: "google",
    tag: "Development Tools"
  },
  {
    title: "Dekorate",
    link: "https://github.com/dekorateio/dekorate",
    description: "Java annotation processors for Kubernetes",
    github: "dekorateio",
    tag: "Development Tools"
  },
  {
    title: "Lens IDE",
    link: "https://k8slens.dev/",
    description: "A powerful interface and toolkit for managing, visualizing, and interacting with multiple Kubernetes clusters",
    tag: "Development Tools"
  },
  {
    title: "Kosko",
    link: "https://kosko.dev/",
    description: "Organize Kubernetes manifests in JavaScript",
    tag: "Development Tools"
  },
  {
    title: "Telepresence",
    link: "https://www.telepresence.io/",
    description: "Fast, local development for Kubernetes and Openshift microservices",
    tag: "Development Tools"
  },
  {
    title: "KuberEz",
    link: "https://github.com/uengine-oss/kuber-ez",
    description: "Graphical modeling tool for Kubernetes manifest",
    github: "uengine-oss",
    tag: "Development Tools"
  },
  {
    title: "mirrord",
    link: "https://github.com/metalbear-co/mirrord",
    description: "Run your local process in the context of your cloud cluster",
    github: "metalbear-co",
    tag: "Development Tools"
  },
  {
    title: "Aptakube",
    link: "https://aptakube.com",
    description: "A modern, lightweight and multi-cluster desktop client for Kubernetes",
    tag: "Development Tools"
  },
  {
    title: "Kubes",
    link: "https://github.com/boltops-tools/kubes",
    description: "Kubernetes App Deploy Tool: build docker image, compile Kubernetes YAML files, and apply them",
    github: "boltops-tools",
    tag: "Development Tools"
  },
  {
    title: "Kaniko",
    link: "https://github.com/GoogleContainerTools/kaniko",
    description: "Build Container Images In Kubernetes",
    github: "GoogleContainerTools",
    tag: "Development Tools"
  },
  {
    title: "Python client for kubernetes",
    link: "https://github.com/kubernetes-client/python",
    description: "Official Python client library for kubernetes",
    github: "kubernetes-client",
    tag: "Clients"
  },
  {
    title: "Eclipse Che IDE for k8s",
    link: "https://github.com/eclipse/che",
    description: "The Kubernetes-Native IDE for Developer Teams",
    github: "eclipse",
    tag: "Development Tools"
  },
  {
    title: "Kubebuilder",
    link: "https://github.com/kubernetes-sigs/kubebuilder",
    description: "SDK for building Kubernetes APIs using CRDs",
    github: "kubernetes-sigs",
    tag: "Development Tools"
  },
  {
    title: "Operator-sdk",
    link: "https://github.com/operator-framework/operator-sdk",
    description: "SDK for building Kubernetes applications. Provides high level APIs and project scaffolding",
    github: "operator-framework",
    tag: "Development Tools"
  },
  {
    title: "cdk8s",
    link: "https://github.com/cdk8s-team/cdk8s",
    description: "Kubernetes native apps and abstractions using object-oriented programming",
    github: "cdk8s-team",
    tag: "Development Tools"
  },
  {
    title: "Gitkube",
    link: "https://github.com/hasura/gitkube",
    description: "Build and deploy docker images to Kubernetes using git push",
    github: "hasura",
    tag: "Development Tools"
  },
  {
    title: "Arkade",
    link: "https://github.com/alexellis/arkade",
    description: "Open Source Marketplace For Kubernetes",
    github: "alexellis",
    tag: "Development Tools"
  },
  {
    title: "k2tf",
    link: "https://github.com/sl1pm4t/k2tf",
    description: "Kubernetes YAML to Terraform HCL converters",
    github: "sl1pm4t",
    tag: "Development Tools"
  },
  {
    title: "Terraformer",
    link: "https://github.com/GoogleCloudPlatform/terraformer",
    description: "CLI tool to generate terraform files from existing infrastructure (reverse Terraform)",
    github: "GoogleCloudPlatform",
    tag: "Development Tools"
  },
  {
    title: "Atomix",
    link: "https://github.com/atomix/atomix",
    description: "A Kubernetes toolkit for building distributed applications using cloud native principles",
    github: "atomix",
    tag: "Development Tools"
  },
  {
    title: "Brigade",
    link: "https://github.com/brigadecore/brigade",
    description: "Event-driven scripting for Kubernetes",
    github: "brigadecore",
    tag: "Development Tools"
  },
  {
    title: "Spread",
    link: "https://github.com/redspread/spread",
    description: "Docker to Kubernetes in one command",
    github: "redspread",
    tag: "Development Tools"
  },
  {
    title: "Kompose",
    link: "https://github.com/kubernetes/kompose",
    description: "Convert docker compose to kubernetes resources",
    github: "kubernetes",
    tag: "Development Tools"
  },
  {
    title: "Helmfile",
    link: "https://github.com/helmfile/helmfile",
    description: "Declaratively deploy Kubernetes manifests, Kustomize configs, and Charts as Helm releases",
    github: "helmfile",
    tag: "Development Tools"
  },
  {
    title: "validkube",
    link: "https://github.com/komodorio/validkube",
    description: "ValidKube combines the best open-source tools to help ensure Kubernetes YAML best practices",
    github: "komodorio",
    tag: "Development Tools"
  },
  {
    title: "Config Syncer",
    link: "https://github.com/kubeops/config-syncer",
    description: "Config Syncer by AppsCode keeps ConfigMaps and Secrets synchronized across namespaces and/or clusters",
    github: "kubeops",
    tag: "Development Tools"
  },
  {
    title: "Gefyra",
    link: "https://github.com/gefyrahq/gefyra",
    description: "Gefyra: Blazingly-fast, rock-solid, local application development with Kubernetes",
    github: "gefyrahq",
    tag: "Development Tools"
  },
  {
    title: "Kubernetes ConfigMap Reload",
    link: "https://github.com/jimmidyson/configmap-reload",
    description: "Simple binary to trigger a reload when a Kubernetes ConfigMap is updated",
    github: "jimmidyson",
    tag: "Development Tools"
  },
  {
    title: "RELOADER",
    link: "https://github.com/stakater/Reloader",
    description: "A Kubernetes controller to watch changes in ConfigMap and Secrets and do rolling upgrades on Pods",
    github: "stakater",
    tag: "Development Tools"
  },
  {
    title: "Ingress Monitor Controller",
    link: "https://github.com/stakater/IngressMonitorController",
    description: "A Kubernetes controller to watch ingresses and create liveness alerts for your apps/microservices",
    github: "stakater",
    tag: "Development Tools"
  },
  {
    title: "odo",
    link: "https://odo.dev/",
    description: "Developer-focused CLI for fast & iterative application development on Kubernetes and Podman",
    github: "redhat-developer",
    tag: "Development Tools"
  },
  {
    title: "k8tz",
    link: "https://github.com/k8tz/k8tz",
    description: "Kubernetes admission controller and a CLI tool to inject timezones into Pods and CronJobs",
    github: "k8tz",
    tag: "Development Tools"
  },
  {
    title: "KDash",
    link: "https://github.com/kdash-rs/kdash",
    description: "A simple and fast dashboard for Kubernetes",
    github: "kdash-rs",
    tag: "Development Tools"
  },
  {
    title: "DevSpace",
    link: "https://www.devspace.sh/",
    description: "An open-source developer tool for Kubernetes that lets you develop and deploy cloud-native software faster",
    github: "devspace-sh",
    tag: "Development Tools"
  },
  {
    title: "K8Studio",
    link: "https://github.com/guiqui/k8Studio",
    description: "K8 Studio is a cross-platform client IDE to manage Kubernetes Clusters",
    github: "guiqui",
    tag: "Development Tools"
  },
  {
    title: "Radius",
    link: "https://github.com/radius-project/radius",
    description: "Radius is a cloud-native, portable application platform that makes app development easier",
    github: "radius-project",
    tag: "Development Tools"
  },
  
  // Logging and Tracing
  {
    title: "Jaeger",
    link: "https://github.com/jaegertracing/jaeger",
    description: "CNCF Jaeger, a Distributed Tracing Platform",
    github: "jaegertracing",
    tag: "Logging and Tracing"
  },
  {
    title: "Kiali",
    link: "https://github.com/kiali/kiali",
    description: "Kiali project, observability for the Istio service mesh",
    github: "kiali",
    tag: "Logging and Tracing"
  },
  {
    title: "ELK",
    link: "https://github.com/elastic",
    description: "Elasticsearch, Logstash, Kibana",
    github: "elastic",
    tag: "Logging and Tracing"
  },
  {
    title: "fluentbit",
    link: "https://github.com/fluent/fluent-bit",
    description: "Fast and Lightweight Log processor and forwarder for Linux, BSD and OSX",
    github: "fluent",
    tag: "Logging and Tracing"
  },
  {
    title: "Loki",
    link: "https://github.com/grafana/loki",
    description: "Like Prometheus, but for logs",
    github: "grafana",
    tag: "Logging and Tracing"
  },
  {
    title: "kubectl-mtail",
    link: "https://gitlab.com/grzesuav/kubectl-mtail",
    description: "Tail logs from multiple pods matching label selector",
    github: "grzesuav",
    tag: "Logging and Tracing"
  },
  {
    title: "k8spacket",
    link: "https://github.com/k8spacket/k8spacket",
    description: "Packets traffic visualization for kubernetes",
    github: "k8spacket",
    tag: "Logging and Tracing"
  },
  {
    title: "goldpinger",
    link: "https://github.com/bloomberg/goldpinger",
    description: "Debugging tool for Kubernetes which tests and displays connectivity between nodes in the cluster",
    github: "bloomberg",
    tag: "Logging and Tracing"
  },
  {
    title: "Otterize network mapper",
    link: "https://github.com/otterize/network-mapper",
    description: "Map Kubernetes in-cluster traffic and export as text, intents, or an image",
    github: "otterize",
    tag: "Logging and Tracing"
  },
  {
    title: "kube-audit-rest",
    link: "https://github.com/RichardoC/kube-audit-rest",
    description: "Kubernetes audit logging, when you don't control the control plane",
    github: "RichardoC",
    tag: "Logging and Tracing"
  },
  {
    title: "kail",
    link: "https://github.com/boz/kail",
    description: "Kubernetes log viewer",
    github: "boz",
    tag: "Logging and Tracing"
  },
  {
    title: "retina",
    link: "https://github.com/microsoft/retina",
    description: "eBPF distributed networking observability tool for Kubernetes",
    github: "microsoft",
    tag: "Logging and Tracing"
  },
  {
    title: "sablier",
    link: "https://github.com/acouvreur/sablier",
    description: "Starting containers on demand and close automatically when not in use",
    github: "acouvreur",
    tag: "Logging and Tracing"
  },
  
  // Troubleshooting / Debugging
  {
    title: "Kubectl-debug",
    link: "https://github.com/aylei/kubectl-debug",
    description: "Allows you to run a new container with all the troubleshooting tools installed in running pod for debugging purposes",
    github: "aylei",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "PowerfulSeal",
    link: "https://github.com/bloomberg/powerfulseal",
    description: "A powerful testing tool for Kubernetes clusters",
    github: "bloomberg",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "Crash-diagnostic",
    link: "https://github.com/vmware-tanzu/crash-diagnostics",
    description: "Crash-Diagnostics is a tool to help investigate, analyze, and troubleshoot unresponsive or crashed Kubernetes clusters",
    github: "vmware-tanzu",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "Kubernetes CLI Plugin - Doctor",
    link: "https://github.com/emirozer/kubectl-doctor",
    description: "kubectl cluster triage plugin for k8s (brew doctor equivalent)",
    github: "emirozer",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "Knative Inspect",
    link: "https://github.com/nimakaviani/knative-inspect",
    description: "A light-weight debugging tool for Knative's system components",
    github: "nimakaviani",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "Kubeman",
    link: "https://github.com/walmartlabs/kubeman",
    description: "To find information from Kubernetes clusters, and to investigate issues related to Kubernetes and Istio",
    github: "walmartlabs",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "kpexec",
    link: "https://github.com/ssup2/kpexec",
    description: "kpexec is a kubernetes cli that runs commands in a container with high privileges",
    github: "ssup2",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "Koolkits",
    link: "https://github.com/lightrun-platform/koolkits",
    description: "Opinionated, language-specific, batteries-included debug container images for Kubernetes",
    github: "lightrun-platform",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "kubespy",
    link: "https://github.com/huazhihao/kubespy",
    description: "pod debugging tool for kubernetes clusters with docker runtimes",
    github: "huazhihao",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "Inspektor Gadget",
    link: "https://github.com/inspektor-gadget/inspektor-gadget",
    description: "A collection of eBPF-based tools to debug and inspect Kubernetes resources and applications",
    github: "inspektor-gadget",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "KubeSkoop",
    link: "https://github.com/alibaba/kubeskoop",
    description: "Kubernetes networking diagnose tool for different CNI plug-ins and IAAS providers",
    github: "alibaba",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "kubent",
    link: "https://github.com/doitintl/kube-no-trouble",
    description: "Easily check your clusters for use of deprecated APIs",
    github: "doitintl",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "kftray",
    link: "https://github.com/hcavarsan/kftray",
    description: "A cross-platform system tray application for managing multiple kubectl port-forward commands",
    github: "hcavarsan",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "kuttl",
    link: "https://github.com/kudobuilder/kuttl",
    description: "Declarative approach to test Kubernetes Operators",
    github: "kudobuilder",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "kdave",
    link: "https://github.com/wayfair-incubator/kdave",
    description: "Kubernetes Deprecated API Versions Exporter checks for deprecated apiVersions in the cluster",
    github: "wayfair-incubator",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "kubediff",
    link: "https://github.com/Ramilito/kubediff",
    description: "Source VS Deployed - Used to sanity check and understand what has changed between environments",
    github: "Ramilito",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "kubebuddy",
    link: "https://github.com/KubeDeckio/KubeBuddy",
    description: "A PowerShell tool for monitoring and managing Kubernetes clusters with health check scoring",
    github: "KubeDeckio",
    tag: "Troubleshooting / Debugging"
  },
  {
    title: "kube-s3",
    link: "https://github.com/freegroup/kube-s3",
    description: "Kubernetes pods used shared S3 storage",
    github: "freegroup",
    tag: "Pods Management"
  },
  {
    title: "kubectl-ports-rs",
    link: "https://github.com/widnyana/kubectl-ports-rs",
    description: "A kubectl krew plugin to provide a list of exposed ports on kubernetes Pod resources",
    github: "widnyana",
    tag: "Pods Management"
  },
  
  // Cluster Management
  {
    title: "Monokle",
    link: "https://github.com/kubeshop/monokle",
    description: "Desktop unified visual tool for authoring, analysis and deployment of Kubernetes configurations",
    github: "kubeshop",
    tag: "Cluster Management"
  },
  {
    title: "kops",
    link: "https://github.com/kubernetes/kops",
    description: "Production Grade K8s Installation, Upgrades, and Management",
    github: "kubernetes",
    tag: "Cluster Management"
  },
  {
    title: "silver-surfer",
    link: "https://github.com/devtron-labs/silver-surfer",
    description: "Check ApiVersion compatibility and provide Migration path for Kubernetes objects when upgrading Kubernetes to latest versions",
    github: "devtron-labs",
    tag: "Cluster Management"
  },
  {
    title: "Kube-ops-view",
    link: "https://github.com/hjacobs/kube-ops-view",
    description: "Kubernetes Operational View - read-only system dashboard for multiple K8s clusters",
    github: "hjacobs",
    tag: "Cluster Management"
  },
  {
    title: "kubeprompt",
    link: "https://github.com/jlesquembre/kubeprompt",
    description: "Kubernetes prompt info",
    github: "jlesquembre",
    tag: "Cluster Management"
  },
  {
    title: "Metalk8s",
    link: "https://github.com/scality/metalk8s",
    description: "An opinionated Kubernetes distribution with a focus on long-term on-prem deployments",
    github: "scality",
    tag: "Cluster Management"
  },
  {
    title: "kind",
    link: "https://github.com/kubernetes-sigs/kind",
    description: "Kubernetes IN Docker - local clusters for testing Kubernetes",
    github: "kubernetes-sigs",
    tag: "Cluster Management"
  },
  {
    title: "Clusterman",
    link: "https://github.com/Yelp/clusterman",
    description: "Cluster Autoscaler for Kubernetes and Mesos",
    github: "Yelp",
    tag: "Cluster Management"
  },
  {
    title: "Cert-manager",
    link: "https://github.com/jetstack/cert-manager",
    description: "Automatically provision and manage TLS certificates",
    github: "jetstack",
    tag: "Cluster Management"
  },
  {
    title: "Goldilocks",
    link: "https://github.com/FairwindsOps/goldilocks",
    description: "Get your resource requests 'Just Right'",
    github: "FairwindsOps",
    tag: "Cluster Management"
  },
  {
    title: "katafygio",
    link: "https://github.com/bpineau/katafygio",
    description: "Dump, or continuously backup Kubernetes objets as yaml files in git",
    github: "bpineau",
    tag: "Cluster Management"
  },
  {
    title: "Rancher",
    link: "https://github.com/rancher/rancher",
    description: "Complete container management platform",
    github: "rancher",
    tag: "Cluster Management"
  },
  {
    title: "Sealed Secrets",
    link: "https://github.com/bitnami-labs/sealed-secrets",
    description: "A Kubernetes controller and tool for one-way encrypted Secrets",
    github: "bitnami-labs",
    tag: "Cluster Management"
  },
  {
    title: "OpenKruise/Kruise",
    link: "https://github.com/openkruise/kruise",
    description: "Automate application workloads management on Kubernetes",
    github: "openkruise",
    tag: "Cluster Management"
  },
  {
    title: "kubectl snapshot",
    link: "https://github.com/fbrubbo/kubectl-snapshot",
    description: "Take Cluster Snapshots",
    github: "fbrubbo",
    tag: "Cluster Management"
  },
  {
    title: "kapp",
    link: "https://github.com/k14s/kapp",
    description: "Simple deployment tool focused on the concept of Kubernetes application — a set of resources with the same label",
    github: "k14s",
    tag: "Cluster Management"
  },
  {
    title: "KEDA",
    link: "https://keda.sh/",
    description: "Event-driven autoscaler for Kubernetes",
    github: "kedacore",
    tag: "Auto Scaling"
  },
  {
    title: "Octant",
    link: "https://github.com/vmware-tanzu/octant",
    description: "To better understand the complexity of Kubernetes clusters",
    github: "vmware-tanzu",
    tag: "Cluster Management"
  },
  {
    title: "Portainer",
    link: "https://github.com/portainer/k8s",
    description: "Portainer inside a Kubernetes environment",
    github: "portainer",
    tag: "Cluster Management"
  },
  {
    title: "Gardener",
    link: "https://gardener.cloud/",
    description: "Deliver fully-managed clusters at scale everywhere with your own Kubernetes-as-a-Service",
    tag: "Cluster Management"
  },
  {
    title: "xlskubectl",
    link: "https://github.com/learnk8s/xlskubectl",
    description: "A spreadsheet to control your Kubernetes cluster",
    github: "learnk8s",
    tag: "Cluster Management"
  },
  {
    title: "Kubefirst",
    link: "https://github.com/kubefirst/kubefirst",
    description: "Fully-automated OSS delivery & infrastructure management gitops platforms",
    github: "kubefirst",
    tag: "Cluster Management"
  },
  {
    title: "Kamaji",
    link: "https://github.com/clastix/kamaji",
    description: "Build and operate Kubernetes at scale with a fraction of operational burden",
    github: "clastix",
    tag: "Cluster Management"
  },
  {
    title: "kustomizer",
    link: "https://github.com/stefanprodan/kustomizer",
    description: "An experimental package manager for distributing Kubernetes configuration as OCI artifacts",
    github: "stefanprodan",
    tag: "Cluster Management"
  },
  {
    title: "Kudo",
    link: "https://github.com/kudobuilder/kudo",
    description: "Declarative approach to building production-grade Kubernetes Operators",
    github: "kudobuilder",
    tag: "Cluster Management"
  },
  {
    title: "node-problem-detector",
    link: "https://github.com/kubernetes/node-problem-detector",
    description: "This is a place for various problem detectors running on the Kubernetes nodes",
    github: "kubernetes",
    tag: "Monitoring & Observability"
  },
  {
    title: "k0s",
    link: "https://github.com/k0sproject/k0s",
    description: "All-inclusive Kubernetes distribution, configured with all features needed to build a cluster and packaged as a single binary",
    github: "k0sproject",
    tag: "Cluster Management"
  },
  {
    title: "k0smotron",
    link: "https://github.com/k0sproject/k0smotron",
    description: "Deploy and run Kubernetes control planes powered by k0s on any existing cluster",
    github: "k0sproject",
    tag: "Cluster Management"
  },
  {
    title: "ClusterPedia",
    link: "https://github.com/clusterpedia-io/clusterpedia",
    description: "The Encyclopedia of Kubernetes clusters",
    github: "clusterpedia-io",
    tag: "Cluster Management"
  },
  {
    title: "kubean",
    link: "https://github.com/kubean-io/kubean",
    description: "Kubernetes lifecycle management operator based on kubespray",
    github: "kubean-io",
    tag: "Cluster Management"
  },
  {
    title: "punq",
    link: "https://github.com/mogenius/punq",
    description: "Self-hosted Kubernetes workload manager with team collaboration",
    github: "mogenius",
    tag: "Cluster Management"
  },
  {
    title: "Claudie",
    link: "https://github.com/berops/claudie",
    description: "Deploy and operate Kubernetes clusters with each nodepool in a different provider or on-prem",
    github: "berops",
    tag: "Cluster Management"
  },
  {
    title: "Kubemarine",
    link: "https://github.com/Netcracker/KubeMarine",
    description: "Management tool for Kubernetes cluster deployment and maintenance",
    github: "Netcracker",
    tag: "Cluster Management"
  },
  {
    title: "k8s-duplicator",
    link: "https://github.com/Nick-Triller/k8s-duplicator",
    description: "Kubernetes controller that copies secrets into other namespaces",
    github: "Nick-Triller",
    tag: "Cluster Management"
  },
  {
    title: "KubeStellar",
    link: "https://github.com/kubestellar/kubestellar",
    description: "A flexible solution for challenges associated with multi-cluster configuration management for edge, multi-cloud, and hybrid cloud",
    github: "kubestellar",
    tag: "Cluster Management"
  },
  {
    title: "Trolley",
    link: "https://github.com/Trolley-MGMT/trolleymgmt",
    description: "Trolley is a multi cloud Kubernetes management system",
    github: "Trolley-MGMT",
    tag: "Cluster Management"
  },
  {
    title: "Cyclops",
    link: "https://github.com/cyclops-ui/cyclops",
    description: "A powerful user interface for managing and interacting with Kubernetes clusters",
    github: "cyclops-ui",
    tag: "Cluster Management"
  },
  {
    title: "Liqo",
    link: "https://github.com/liqotech/liqo",
    description: "An open-source project that enables dynamic and seamless Kubernetes multi-cluster topologies",
    github: "liqotech",
    tag: "Cluster Management"
  },
  {
    title: "Guard",
    link: "https://github.com/kubeguard/guard",
    description: "Kubernetes Authentication & Authorization WebHook Server",
    github: "kubeguard",
    tag: "Security Tools"
  },
  {
    title: "Meshery",
    link: "https://github.com/meshery/meshery",
    description: "Meshery is a Multi-cluster management tool for Kubernetes and Clouds",
    github: "meshery",
    tag: "Cluster Management"
  },
  {
    title: "cluster-template",
    link: "https://github.com/onedr0p/cluster-template",
    description: "A template for deploying a Kubernetes cluster with k3s or Talos",
    github: "onedr0p",
    tag: "Cluster Management"
  },
  {
    title: "vCluster",
    link: "https://github.com/loft-sh/vcluster",
    description: "Create fully functional virtual Kubernetes clusters inside namespaces of underlying clusters",
    github: "loft-sh",
    tag: "Cluster Management"
  },
  {
    title: "KindScaler",
    link: "https://github.com/lobuhi/kindscaler",
    description: "Node Management for KinD Clusters. Modify the KinD cluster configuration by adding or removing nodes",
    github: "lobuhi",
    tag: "Cluster Management"
  },
  {
    title: "buoy",
    link: "https://github.com/everettraven/buoy",
    description: "A declarative Kubernetes dashboard in your terminal",
    github: "everettraven",
    tag: "Cluster Management"
  },
  {
    title: "Glasskube",
    link: "https://github.com/glasskube/glasskube",
    description: "Kubernetes package manager that lets you install apps via an easy-to-use web interface or CLI",
    github: "glasskube",
    tag: "Cluster Management"
  },
  {
    title: "Karmada",
    link: "https://github.com/karmada-io/karmada",
    description: "Open, Multi-Cloud, Multi-Cluster Kubernetes Orchestration",
    github: "karmada-io",
    tag: "Cluster Management"
  },
  {
    title: "Kubeadmiral",
    link: "https://github.com/kubewharf/kubeadmiral",
    description: "Multi-Cluster Kubernetes Orchestration",
    github: "kubewharf",
    tag: "Cluster Management"
  },
  {
    title: "RBAC Wizard",
    link: "https://github.com/pehlicd/rbac-wizard",
    description: "Helps to visualize and analyze the RBAC configurations of the Kubernetes cluster",
    github: "pehlicd",
    tag: "Security Tools"
  },
  {
    title: "Kondense",
    link: "https://github.com/unagex/kondense",
    description: "Tool designed for Kubernetes environments, focused on optimizing memory and CPU usage in containers",
    github: "unagex",
    tag: "Cluster Management"
  },
  {
    title: "Kubeseal-Webgui",
    link: "https://github.com/Jaydee94/kubeseal-webgui",
    description: "Simple web UI for Bitnami Sealed Secrets",
    github: "Jaydee94",
    tag: "Cluster Management"
  },
  {
    title: "Klutch",
    link: "https://github.com/anynines/klutchio",
    description: "Klutch extends Crossplane to manage resources across multiple Kubernetes clusters",
    github: "anynines",
    tag: "Cluster Management"
  },
  {
    title: "Kanvas",
    link: "https://kanvas.new",
    description: "A comprehensive suite of collaborative tools for designing, deploying and managing cloud-native infrastructure",
    github: "meshery",
    tag: "Cluster Management"
  },

  // Cluster with Core CLI Tools
  {
    title: "Bootkube",
    link: "https://github.com/kubernetes-sigs/bootkube",
    description: "Launch a self-hosted Kubernetes cluster",
    github: "kubernetes-sigs",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kubectx + kubens",
    link: "https://github.com/ahmetb/kubectx",
    description: "Switch faster between clusters and namespaces in kubectl",
    github: "ahmetb",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kube-shell",
    link: "https://github.com/cloudnativelabs/kube-shell",
    description: "Kubernetes shell: An integrated shell for working with Kubernetes",
    github: "cloudnativelabs",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kuttle",
    link: "https://github.com/kayrus/kuttle",
    description: "Kubernetes wrapper for sshuttle without SSH",
    github: "kayrus",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kubectl sudo",
    link: "https://github.com/postfinance/kubectl-sudo",
    description: "Run kubernetes commands with the security privileges of another user",
    github: "postfinance",
    tag: "Cluster CLI Tools"
  },
  {
    title: "K9s",
    link: "https://github.com/derailed/k9s",
    description: "Kubernetes CLI To Manage Your Clusters In Style!",
    github: "derailed",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Ktunnel",
    link: "https://github.com/omrikiei/ktunnel",
    description: "A cli that exposes your local resources to kubernetes",
    github: "omrikiei",
    tag: "Cluster CLI Tools"
  },
  {
    title: "KubeOperator",
    link: "https://github.com/KubeOperator/webkubectl",
    description: "Run kubectl command in Web Browser",
    github: "KubeOperator",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Vimkubectl",
    link: "https://github.com/rottencandy/vimkubectl",
    description: "Manage any Kubernetes resource from Vim",
    github: "rottencandy",
    tag: "Cluster CLI Tools"
  },
  {
    title: "KubeHelper",
    link: "https://github.com/KubeHelper/kubehelper",
    description: "Simplifies many daily Kubernetes cluster tasks through a web interface",
    github: "KubeHelper",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kubecolor",
    link: "https://github.com/hidetatz/kubecolor",
    description: "Colorizes kubectl output",
    github: "hidetatz",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Krew",
    link: "https://github.com/kubernetes-sigs/krew",
    description: "Krew is the package manager for kubectl plugins",
    github: "kubernetes-sigs",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Kueue",
    link: "https://github.com/kubernetes-sigs/kueue",
    description: "Kueue is a set of APIs and controller for job queueing",
    github: "kubernetes-sigs",
    tag: "Cluster CLI Tools"
  },
  {
    title: "fubectl",
    link: "https://github.com/kubermatic/fubectl",
    description: "Reduces repetitive interactions with kubectl",
    github: "kubermatic",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kube-ps1",
    link: "https://github.com/jonmosco/kube-ps1",
    description: "Kubernetes prompt for bash and zsh",
    github: "jonmosco",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Conftest",
    link: "https://github.com/open-policy-agent/conftest",
    description: "Write tests against structured configuration data using the Open Policy Agent Rego query language",
    github: "open-policy-agent",
    tag: "Testing Tools"
  },
  {
    title: "Kube-capacity",
    link: "https://github.com/robscott/kube-capacity",
    description: "A CLI that provides an overview of the resource requests, limits, and utilization in a k8s cluster",
    github: "robscott",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Karpenter",
    link: "https://github.com/aws/karpenter",
    description: "Kubernetes Node Autoscaler built for flexibility, performance, and simplicity",
    github: "aws",
    tag: "Auto Scaling"
  },
  {
    title: "Kubernetes Autoscaler",
    link: "https://github.com/kubernetes/autoscaler",
    description: "Autoscaling components for Kubernetes",
    github: "kubernetes",
    tag: "Auto Scaling"
  },
  {
    title: "Kured",
    link: "https://github.com/kubereboot/kured",
    description: "Kubernetes Reboot Daemon",
    github: "kubereboot",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Kube-prompt",
    link: "https://github.com/c-bata/kube-prompt",
    description: "An interactive kubernetes client featuring auto-complete",
    github: "c-bata",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Click",
    link: "https://github.com/databricks/click",
    description: "Command Line Interactive Controller for Kubernetes",
    github: "databricks",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Kubie",
    link: "https://github.com/sbstp/kubie",
    description: "A more powerful alternative to kubectx and kubens",
    github: "sbstp",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Pluto",
    link: "https://github.com/FairwindsOps/pluto",
    description: "A cli tool to help discover deprecated apiVersions in Kubernetes",
    github: "FairwindsOps",
    tag: "Cluster CLI Tools"
  },
  {
    title: "ksync",
    link: "https://github.com/ksync/ksync",
    description: "Sync files between your local system and a kubernetes cluster",
    github: "ksync",
    tag: "Development Tools"
  },
  {
    title: "fleet",
    link: "https://github.com/rancher/fleet",
    description: "Manage large fleets of Kubernetes clusters",
    github: "rancher",
    tag: "Cluster Management"
  },
  {
    title: "stash",
    link: "https://github.com/stashed/stash",
    description: "Backup your Kubernetes Stateful Applications",
    github: "stashed",
    tag: "Backup Tools"
  },
  {
    title: "Finch",
    link: "https://github.com/runfinch/finch",
    description: "The Finch CLI an open source client for container development",
    github: "runfinch",
    tag: "Development Tools"
  },
  {
    title: "KubeView",
    link: "https://github.com/benc-uk/kubeview",
    description: "Kubernetes cluster visualiser and graphical explorer",
    github: "benc-uk",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Descheduler",
    link: "https://github.com/kubernetes-sigs/descheduler",
    description: "Descheduler for Kubernetes",
    github: "kubernetes-sigs",
    tag: "Cluster CLI Tools"
  },
  {
    title: "cloudtty",
    link: "https://github.com/cloudtty/cloudtty",
    description: "A Friendly Kubernetes CloudShell (Web Terminal)",
    github: "cloudtty",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kor",
    link: "https://github.com/yonahd/kor",
    description: "A Tool to discover unused Kubernetes Resources",
    github: "yonahd",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Kubernetes Image Puller",
    link: "https://github.com/che-incubator/kubernetes-image-puller",
    description: "Caching images on a cluster by creating a DaemonSet downloading and running container images on each node",
    github: "che-incubator",
    tag: "Caching"
  },
  {
    title: "image-builder",
    link: "https://github.com/kubernetes-sigs/image-builder",
    description: "A tool for building Kubernetes virtual machine images across multiple infrastructure providers",
    github: "kubernetes-sigs",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Kubed",
    link: "https://github.com/eshelyaron/kubed",
    description: "Interactive interface within Emacs to work with Kubernetes clusters with the full power of kubectl",
    github: "eshelyaron",
    tag: "Cluster CLI Tools"
  },
  {
    title: "Duplik8s",
    link: "https://github.com/Telemaco019/duplik8s",
    description: "A kubectl plugin to duplicate resources in a Kubernetes cluster",
    github: "Telemaco019",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kl",
    link: "https://github.com/robinovitch61/kl",
    description: "Interactive, multi container and cluster terminal app for logs",
    github: "robinovitch61",
    tag: "Logging and Tracing"
  },
  {
    title: "kubectl foreach",
    link: "https://github.com/ahmetb/kubectl-foreach",
    description: "Run kubectl commands in all/some contexts in parallel (similar to GNU xargs+parallel)",
    github: "ahmetb",
    tag: "Cluster CLI Tools"
  },
  {
    title: "kubecui",
    link: "https://github.com/pymag09/kubecui",
    description: "kubeui makes kubectl more user friendly",
    github: "pymag09",
    tag: "Cluster CLI Tools"
  },
  {
    title: "q-as-kubectl",
    link: "https://github.com/ildar-shaimordanov/q-as-kubectl",
    description: "q as kubectl: yet another way to control k8s commands",
    github: "ildar-shaimordanov",
    tag: "Cluster CLI Tools"
  },
  
  // Alert and Monitoring
  {
    title: "Thanos",
    link: "https://github.com/thanos-io/thanos",
    description: "Highly available Prometheus setup with long term storage capabilities",
    github: "thanos-io",
    tag: "Alert and Monitoring"
  },
  {
    title: "Prometheus",
    link: "https://github.com/prometheus/prometheus",
    description: "The Prometheus monitoring system and time series database",
    github: "prometheus",
    tag: "Alert and Monitoring"
  },
  {
    title: "Grafana",
    link: "https://github.com/grafana/grafana",
    description: "The tool for beautiful monitoring and metric analytics & dashboards for Graphite, InfluxDB & Prometheus & More",
    github: "grafana",
    tag: "Alert and Monitoring"
  },
  {
    title: "Searchlight",
    link: "https://github.com/searchlight/searchlight",
    description: "Alerts for Kubernetes",
    github: "searchlight",
    tag: "Alert and Monitoring"
  },
  {
    title: "linkerd2 Monitoring Mixin for Grafana",
    link: "https://github.com/andrew-waters/linkerd2-mixin",
    description: "Grafana dashboards for linkerd2 monitoring and can work in standalone (default) or in multi cluster setup",
    github: "andrew-waters",
    tag: "Alert and Monitoring"
  },
  {
    title: "kuberhaus",
    link: "https://github.com/stevelacy/kuberhaus",
    description: "Kubernetes resource dashboard with node/pod layout and resource requests",
    github: "stevelacy",
    tag: "Alert and Monitoring"
  },
  {
    title: "Kubernetes Job/CronJob Notifier",
    link: "https://github.com/sukeesh/k8s-job-notify",
    description: "This tool sends an alert to slack whenever there is a Kubernetes cronJob/Job failure/success",
    github: "sukeesh",
    tag: "Alert and Monitoring"
  },
  {
    title: "Argus",
    link: "https://clustergarage.io/argus/docs/overview",
    description: "This tool monitors changes in the filesystem on specified paths",
    tag: "Alert and Monitoring"
  },
  {
    title: "Kube-Scout",
    link: "https://github.com/ReallyLiri/kubescout",
    description: "Scout for alarming issues across your Kubernetes clusters",
    github: "ReallyLiri",
    tag: "Alert and Monitoring"
  },
  {
    title: "Kwatch",
    link: "https://github.com/abahmed/kwatch",
    description: "Monitor & detect crashes in your Kubernetes(K8s) cluster instantly",
    github: "abahmed",
    tag: "Alert and Monitoring"
  },
  {
    title: "Scope",
    link: "https://github.com/weaveworks/scope",
    description: "Monitoring, visualisation & management for Docker & Kubernetes",
    github: "weaveworks",
    tag: "Alert and Monitoring"
  },
  {
    title: "Kubeshark",
    link: "https://github.com/kubeshark/kubeshark",
    description: "TCPDump and Wireshark re-invented for Kubernetes",
    github: "kubeshark",
    tag: "Alert and Monitoring"
  },
  {
    title: "Ksniff",
    link: "https://github.com/eldadru/ksniff",
    description: "Kubectl plugin to ease sniffing on kubernetes pods using tcpdump and wireshark",
    github: "eldadru",
    tag: "Alert and Monitoring"
  },
  {
    title: "Kube-Prometheus-Top [ kptop ]",
    link: "https://github.com/eslam-gomaa/kptop",
    description: "Monitoring for Kubernetes Nodes, Pods, Containers, and PVCs resources on the terminal through Prometheus metrics",
    github: "eslam-gomaa",
    tag: "Alert and Monitoring"
  },
  {
    title: "ktop",
    link: "https://github.com/vladimirvivien/ktop",
    description: "A top-like tool for your Kubernetes clusters",
    github: "vladimirvivien",
    tag: "Alert and Monitoring"
  },
  {
    title: "Kuberhealthy",
    link: "https://github.com/kuberhealthy/kuberhealthy",
    description: "A Kubernetes operator for running synthetic checks as pods. Works great with Prometheus!",
    github: "kuberhealthy",
    tag: "Alert and Monitoring"
  },
  {
    title: "kurt",
    link: "https://github.com/soraro/kurt",
    description: "A Kubernetes plugin that gives context to what is restarting in your Kubernetes cluster",
    github: "soraro",
    tag: "Alert and Monitoring"
  },
  {
    title: "KlusterView",
    link: "https://github.com/oslabs-beta/KlusterView",
    description: "Get instant insights on your Kubernetes clusters with our lightweight, plug-and-play performance monitoring tool",
    github: "oslabs-beta",
    tag: "Alert and Monitoring"
  },
  {
    title: "X.509 Certificate Exporter",
    link: "https://github.com/enix/x509-certificate-exporter/",
    description: "Watch certificates for expiration in Kubernetes Secrets and control-plane files. Alerts and dashboard available",
    github: "enix",
    tag: "Alert and Monitoring"
  },
  {
    title: "VpK",
    link: "https://github.com/k8svisual/vpk",
    description: "VpK - Visually presented Kubernetes. View k8s in graphical fashion",
    github: "k8svisual",
    tag: "Alert and Monitoring"
  },
  {
    title: "k8s-collector",
    link: "https://github.com/gianlucam76/k8s_collector",
    description: "A Kubernetes Job to collect resources, logs and events from a Kubernetes cluster",
    github: "gianlucam76",
    tag: "Alert and Monitoring"
  },
  {
    title: "HolmesGPT",
    link: "https://github.com/robusta-dev/holmesgpt",
    description: "On-Call Assistant for Prometheus Alerts - Get a head start on fixing alerts with AI investigation",
    github: "robusta-dev",
    tag: "Artificial Intelligence"
  },
  {
    title: "kcmsu",
    link: "https://github.com/cristian98149/kcmsu",
    description: "K8s ConfigMaps and Secrets Usage",
    github: "cristian98149",
    tag: "Alert and Monitoring"
  },
  // Security Tools - Adding new tools
  {
    title: "Falco",
    link: "https://falco.org/",
    description: "Cloud Native Runtime Security - detect threats at runtime with open source",
    github: "falcosecurity/falco",
    tag: "Security Tools"
  },
  {
    title: "Tetragon",
    link: "https://github.com/cilium/tetragon",
    description: "eBPF-based security observability and runtime enforcement for Kubernetes workloads",
    github: "cilium/tetragon",
    tag: "Security Tools"
  },
  {
    title: "OPA (Open Policy Agent)",
    link: "https://www.openpolicyagent.org/",
    description: "Policy-based control for cloud native environments",
    github: "open-policy-agent/opa",
    tag: "Security Tools"
  },
  
  // Networking - Adding new tools
  {
    title: "Cilium",
    link: "https://cilium.io/",
    description: "eBPF-based Networking, Observability, and Security for Kubernetes",
    github: "cilium/cilium",
    tag: "Networking"
  },
  {
    title: "Istio",
    link: "https://istio.io/",
    description: "Connect, secure, control, and observe services in Kubernetes",
    github: "istio/istio",
    tag: "Service Mesh"
  },
  {
    title: "Linkerd",
    link: "https://linkerd.io/",
    description: "Ultra light, ultra simple service mesh for Kubernetes",
    github: "linkerd/linkerd2",
    tag: "Service Mesh"
  },
  
  // Development Tools - Adding new tools
  {
    title: "Argo CD",
    link: "https://argoproj.github.io/cd",
    description: "Declarative continuous deployment for Kubernetes",
    github: "argoproj/argo-cd",
    tag: "Continuous Integration & Delivery"
  },
  {
    title: "Backstage",
    link: "https://backstage.io/",
    description: "Open platform for building developer portals",
    github: "backstage/backstage",
    tag: "Development Tools"
  },
  {
    title: "Flux CD",
    link: "https://fluxcd.io/",
    description: "Open and extensible continuous delivery solution for Kubernetes. Powered by GitOps Toolkit",
    github: "fluxcd/flux2",
    tag: "Continuous Integration & Delivery"
  },
  
  // Observability & Monitoring - Adding new tools
  {
    title: "OpenTelemetry",
    link: "https://opentelemetry.io/",
    description: "High-quality, ubiquitous, and portable telemetry to enable effective observability",
    github: "open-telemetry/opentelemetry-specification",
    tag: "Monitoring & Observability"
  },
  {
    title: "Jaeger",
    link: "https://www.jaegertracing.io/",
    description: "End-to-end distributed tracing and observability",
    github: "jaegertracing/jaeger",
    tag: "Monitoring & Observability"
  },
  {
    title: "Thanos",
    link: "https://thanos.io/",
    description: "Highly available Prometheus setup with long term storage capabilities",
    github: "thanos-io/thanos",
    tag: "Monitoring & Observability"
  },
  
  // Platform Engineering - Adding new category
  {
    title: "Crossplane",
    link: "https://crossplane.io/",
    description: "Cloud Native Control Planes - build internal cloud platforms and take control of your organization's infrastructure",
    github: "crossplane/crossplane",
    tag: "Platform Engineering"
  },
  {
    title: "Gardener",
    link: "https://gardener.cloud/",
    description: "Kubernetes-native system managing the full lifecycle of conformant Kubernetes clusters across multiple cloud providers",
    github: "gardener/gardener",
    tag: "Platform Engineering"
  },
  {
    title: "Kratix",
    link: "https://kratix.io/",
    description: "Open-source framework to build and operate platform capabilities using Kubernetes",
    github: "syntasso/kratix",
    tag: "Platform Engineering"
  },
  
  // AI & ML - Adding new tools to AI category
  {
    title: "Kubeflow",
    link: "https://www.kubeflow.org/",
    description: "Machine Learning toolkit built for Kubernetes",
    github: "kubeflow/kubeflow",
    tag: "Artificial Intelligence"
  },
  {
    title: "Seldon Core",
    link: "https://www.seldon.io/",
    description: "Machine learning deployment platform for Kubernetes",
    github: "SeldonIO/seldon-core",
    tag: "Artificial Intelligence"
  },
  
  // Developer Tools - Adding new tools
  {
    title: "K9s",
    link: "https://k9scli.io/",
    description: "Kubernetes CLI to manage your clusters in style",
    github: "derailed/k9s",
    tag: "Development Tools"
  },
  {
    title: "Lens",
    link: "https://k8slens.dev/",
    description: "Kubernetes IDE for managing, troubleshooting, and monitoring Kubernetes clusters",
    github: "lensapp/lens",
    tag: "Development Tools"
  },
  {
    title: "Polaris",
    link: "https://polaris.docs.fairwinds.com/",
    description: "Validate and enforce best practices in Kubernetes workloads",
    github: "FairwindsOps/polaris",
    tag: "Development Tools"
  },
  {
    title: "Goldilocks",
    link: "https://goldilocks.docs.fairwinds.com/",
    description: "Identifies a starting point for resource requests and limits for Kubernetes workloads",
    github: "FairwindsOps/goldilocks",
    tag: "Development Tools"
  },
];
