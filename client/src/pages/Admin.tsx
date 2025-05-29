import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { Eye, Mail, Phone, Calendar, Users, MessageSquare, LogOut } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { Enquiry } from "@shared/schema";

export default function Admin() {
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Check authentication status
  const { data: authStatus, isLoading: authLoading } = useQuery({
    queryKey: ["/api/admin/auth"],
    queryFn: async () => {
      const response = await fetch("/api/admin/auth");
      if (!response.ok) throw new Error("Not authenticated");
      return response.json();
    },
    retry: false,
  });

  const { data: enquiries, isLoading } = useQuery({
    queryKey: ["/api/enquiries"],
    queryFn: async () => {
      const response = await fetch("/api/enquiries");
      if (!response.ok) throw new Error("Failed to fetch enquiries");
      return response.json();
    },
    enabled: !!authStatus, // Only fetch enquiries if authenticated
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/admin/logout", {});
      return response.json();
    },
    onSuccess: () => {
      queryClient.clear();
      toast({
        title: "Logged Out",
        description: "You have been logged out successfully.",
      });
      setLocation("/admin/login");
    },
  });

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !authStatus) {
      setLocation("/admin/login");
    }
  }, [authStatus, authLoading, setLocation]);

  if (authLoading) {
    return (
      <div className="pt-16 min-h-screen bg-karoo-sand">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-karoo-brown mx-auto"></div>
            <p className="mt-4 text-karoo-slate">Checking authentication...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!authStatus) {
    return null; // Will redirect to login
  }

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen bg-karoo-sand">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-karoo-brown mx-auto"></div>
            <p className="mt-4 text-karoo-slate">Loading enquiries...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-karoo-sand">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex justify-between items-start">
            <div>
              <h1 className="text-3xl md:text-4xl font-playfair font-bold karoo-brown mb-4">
                Admin Panel
              </h1>
              <p className="text-xl text-gray-700">
                Manage booking enquiries for Ida Olive Shepherds Cottage
              </p>
            </div>
            <Button
              onClick={() => logoutMutation.mutate()}
              variant="outline"
              className="border-karoo-brown text-karoo-brown hover:bg-karoo-brown hover:text-white"
              disabled={logoutMutation.isPending}
            >
              <LogOut className="mr-2" size={16} />
              {logoutMutation.isPending ? "Logging out..." : "Logout"}
            </Button>
          </div>

          <div className="grid gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center karoo-brown">
                  <MessageSquare className="mr-2" size={24} />
                  Enquiry Summary
                </CardTitle>
                <CardDescription>
                  Total enquiries received: {enquiries?.length || 0}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid gap-6">
            {enquiries && enquiries.length > 0 ? (
              enquiries.map((enquiry: Enquiry) => (
                <Card key={enquiry.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="karoo-brown">
                          {enquiry.firstName} {enquiry.lastName}
                        </CardTitle>
                        <CardDescription className="flex items-center mt-2">
                          <Calendar className="mr-1" size={16} />
                          {enquiry.createdAt ? format(new Date(enquiry.createdAt), "PPP 'at' p") : "No date"}
                        </CardDescription>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedEnquiry(enquiry)}
                            className="border-karoo-brown text-karoo-brown hover:bg-karoo-brown hover:text-white"
                          >
                            <Eye className="mr-1" size={16} />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="karoo-brown">
                              Enquiry Details
                            </DialogTitle>
                          </DialogHeader>
                          {selectedEnquiry && (
                            <div className="space-y-6">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold karoo-chocolate mb-2">Contact Information</h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex items-center">
                                      <Mail className="mr-2 karoo-green" size={16} />
                                      {selectedEnquiry.email}
                                    </div>
                                    {selectedEnquiry.phone && (
                                      <div className="flex items-center">
                                        <Phone className="mr-2 karoo-green" size={16} />
                                        {selectedEnquiry.phone}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="font-semibold karoo-chocolate mb-2">Stay Details</h4>
                                  <div className="space-y-2 text-sm">
                                    {selectedEnquiry.checkinDate && (
                                      <div>
                                        <span className="font-medium">Check-in:</span> {selectedEnquiry.checkinDate}
                                      </div>
                                    )}
                                    {selectedEnquiry.checkoutDate && (
                                      <div>
                                        <span className="font-medium">Check-out:</span> {selectedEnquiry.checkoutDate}
                                      </div>
                                    )}
                                    {selectedEnquiry.guests && (
                                      <div className="flex items-center">
                                        <Users className="mr-2 karoo-green" size={16} />
                                        {selectedEnquiry.guests} guest{selectedEnquiry.guests !== 1 ? 's' : ''}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              {selectedEnquiry.message && (
                                <div>
                                  <h4 className="font-semibold karoo-chocolate mb-2">Message</h4>
                                  <div className="bg-karoo-sand p-4 rounded-lg">
                                    <p className="text-gray-700 whitespace-pre-wrap">{selectedEnquiry.message}</p>
                                  </div>
                                </div>
                              )}
                              
                              <div className="flex gap-2">
                                <Button
                                  onClick={() => window.open(`mailto:${selectedEnquiry.email}`)}
                                  className="bg-karoo-green hover:bg-karoo-brown text-white"
                                >
                                  <Mail className="mr-1" size={16} />
                                  Reply via Email
                                </Button>
                                {selectedEnquiry.phone && (
                                  <Button
                                    onClick={() => window.open(`tel:${selectedEnquiry.phone}`)}
                                    variant="outline"
                                    className="border-karoo-green text-karoo-green hover:bg-karoo-green hover:text-white"
                                  >
                                    <Phone className="mr-1" size={16} />
                                    Call Guest
                                  </Button>
                                )}
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary" className="bg-karoo-green text-white">
                        <Mail className="mr-1" size={12} />
                        {enquiry.email}
                      </Badge>
                      {enquiry.guests && (
                        <Badge variant="outline" className="border-karoo-chocolate text-karoo-chocolate">
                          <Users className="mr-1" size={12} />
                          {enquiry.guests} guest{enquiry.guests !== 1 ? 's' : ''}
                        </Badge>
                      )}
                      {enquiry.checkinDate && (
                        <Badge variant="outline" className="border-karoo-brown text-karoo-brown">
                          {enquiry.checkinDate}
                        </Badge>
                      )}
                    </div>
                    {enquiry.message && (
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {enquiry.message}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <MessageSquare className="mx-auto mb-4 text-gray-400" size={48} />
                  <h3 className="text-lg font-semibold karoo-brown mb-2">No Enquiries Yet</h3>
                  <p className="text-gray-600">
                    Booking enquiries will appear here when guests submit the contact form.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}