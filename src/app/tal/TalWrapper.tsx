import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function TalWrapper() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-600">Best Practices</CardTitle>
          <CardDescription>
            Collection of best practices followed at TAL
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Code organization and structure</li>
            <li>Naming conventions</li>
            <li>Component design patterns</li>
            <li>State management approaches</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-blue-600">Project Templates</CardTitle>
          <CardDescription>Ready-to-use project templates</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Next.js with TypeScript</li>
            <li>React Native starter</li>
            <li>Microservices architecture</li>
            <li>Full-stack applications</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-blue-600">Learning Resources</CardTitle>
          <CardDescription>Curated learning materials</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Internal documentation</li>
            <li>Video tutorials</li>
            <li>Code examples</li>
            <li>Technical articles</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
