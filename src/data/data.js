const data = [
  {
    id: 1,
    question:
      "Which of the following statements regarding S3 storage classes is true?",

    options: [
      "The availability of S3 and S3-IA is the same.",
      "The durability of S3 and S3-IA is the same.",
      "The latency of S3 and Glacier is the same.",
      "The latency of S3 is greater than that of Glacier.",
    ],
    answer: "The durability of S3 and S3-IA is the same.",
  },

  {
    id: 2,
    question:
      "What is the smallest file size that can be stored on standard class S3?",
    options: ["1 byte", "1 MB", "0 bytes", "1 KB"],
    answer: "0 bytes",
  },

  {
    id: 3,
    question: "In what manner are EBS snapshots backed up to S3?",
    options: [
      "Via full backup according to the backup policy set on the volume",
      "Incrementally",
      "Synchronously",
      "EBS volumes are not stored on S3.",
    ],
    answer: "Incrementally",
  },
  {
    id: 4,
    question:
      "Which of the following services is used at an on-premises site to build a site-to-site VPN connection?",
    options: [
      "Storage gateway",
      "Virtual private gateway",
      "Customer gateway",
      "Virtual private network",
    ],
    answer: "Customer gateway",
  },
  {
    id: 5,
    question:
      "Which of the following can be deployed across availability zones?",
    options: [
      "Cluster placement groups",
      "Placement groups",
      "Spread placement groups",
      "Cross-region placement groups",
    ],
    answer: "Spread placement groups",
  },
  {
    id: 6,
    question:
      "How many tunnels for network traffic are involved when a customer gateway connects to an AWS VPC via an AWS-managed VPN connection?",
    options: [
      "One",
      "Two",
      "Three",
      "It depends on the settings in the AWS VPC",
    ],
    answer: "Two",
  },
  {
    id: 7,
    question:
      " Which of the following storage classes is optimized for long-term data storage at the expense of retrieval time?",
    options: ["S3", "S3-IA", "S3 One Zone-IA", "Glacier"],
    answer: "Glacier",
  },
  {
    id: 8,
    question:
      "  What HTTP code would you expect after a successful upload of an object to an S3 bucket?",
    options: ["HTTP 200", "HTTP 307", "HTTP 404", "HTTP 501"],
    answer: "HTTP 200",
  },
  {
    id: 9,
    question: "What is the durability of S3 One Zone-IA?",
    options: ["99.0%", "99.9%", "99.99%", "99.999999999%"],
    answer: "99.999999999%",
  },
  {
    id: 10,
    question:
      "What is the anchor on the AWS side of a site-to-site VPN connection between an on-premises site and AWS?",
    options: [
      "IPSec tunnel",
      "Virtual private gateway",
      "Customer gateway",
      "VPC",
    ],
    answer: "Virtual private gateway",
  },
];
export default data;
